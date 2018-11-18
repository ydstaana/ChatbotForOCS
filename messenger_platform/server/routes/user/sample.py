from allennlp.models.archival import load_archive
from allennlp.service.predictors import Predictor

archive = load_archive("../../../../dataset/bidaf-model-2017.09.15-charpad.tar.gz")
bidaf_model = Predictor.from_archive(archive, "machine-comprehension")