import { Component, OnInit, EventEmitter } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { Entry } from 'src/app/models/entry';
import { EntryService } from 'src/app/services/entry.service';
import { MaterializeAction } from 'angular2-materialize';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  faqs: Array<Entry>;
  form: FormGroup;
  modalActions = new EventEmitter<string|MaterializeAction>();
  
  constructor(private serverService : ServerService, private entryService: EntryService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      question: '',
      answer: ''
    });

    this.entryService.getEntries().then((data: Array<Entry>) => {
      this.faqs = data;
      console.log(this.faqs);
    })

    this.modalActions.emit({action:"modal",params:['open']})

  }

  startService(){
  	this.serverService.startService().then(data => console.log(data));
  }

  createEntry() {
    var entry = new Entry()
    .withEntry(this.form.get('question').value, this.form.get('answer').value)
    console.log(entry);
    this.entryService.createEntry(entry).then(data => {
      console.log("SUCCESS")
    }, () => console.log("error"))
  }

}
