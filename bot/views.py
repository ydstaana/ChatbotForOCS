from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from bot import urls

import pprint
import subprocess, shutil
import os

import logging
from django.conf import settings

fmt = getattr(settings, 'LOG_FORMAT', None)
lvl = getattr(settings, 'LOG_LEVEL', logging.DEBUG)

logging.basicConfig(format=fmt, level=lvl)
logging.debug("Logging started on %s for %s" % (logging.root.name, logging.getLevelName(lvl)))

pretty_print = pprint.PrettyPrinter(indent=4)
global_passage = ""
yourpath = './bot/for_consumption'

"""
Initialize allennlp model from startup, prepare for question answering
"""
from allennlp.models.archival import load_archive
from allennlp.service.predictors import Predictor
import pprint

pretty_print = pprint.PrettyPrinter(indent=4)

print(os.getcwd())
archive = load_archive("./dataset/bidaf-model-2017.09.15-charpad.tar.gz")
bidaf_model = Predictor.from_archive(archive, "machine-comprehension")


@api_view(['GET', 'POST'])

def update_passage(request):
	global global_passage
	logging.debug(os.getcwd())
	for root, dirs, files in os.walk(yourpath, topdown=False):
		for name in files:
			path = os.path.join(root,name)
			logging.debug("Path : %s", path)
			proc = subprocess.call(['tesseract',path,'output'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
			if(proc): #if the memo is not in image form (eg. tiff)
				subprocess.call(['convert','-density','300',path, './temp.tiff'])
				subprocess.call(['tesseract','./temp.tiff','output'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
				with open('output.txt','r') as output:
					for line in output:
						logging.debug(line)
						if line != '\n':
							global_passage += line

		if os.listdir(yourpath) :
			shutil.move(path, path.replace("for_consumption","consumed"))
			os.remove('./temp.tiff')


	global_passage = global_passage.replace('\n', ' ')
	return JsonResponse({
			'code': 200,
			'passage': global_passage,
			'message': "Passages updated"
		})
	
def answer_question(request, question):
	global global_passage

	print(global_passage);

	bidaf_examples = [
	    {
	      "passage": global_passage,
	      "question": question,
	    },
	]


	prediction = bidaf_model.predict_json(bidaf_examples[0])

	# print("\n=======================\n")
	# pretty_print.pprint("Question: " + bidaf_examples[0]["question"])
	# print("\n=======================\n")

	# pretty_print.pprint("Passage: " + bidaf_examples[0]["passage"])
	# print("\n=======================\n")

	# print("Predicted Answer: ", prediction["best_span_str"])
	# print("\n=======================\n")


	# print("Full prediction output: \n")
	# pretty_print.pprint(prediction)

	return JsonResponse(prediction)