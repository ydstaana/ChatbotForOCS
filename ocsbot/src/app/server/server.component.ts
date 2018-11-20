import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor(private serverService : ServerService) { }

  ngOnInit() {
  }

  startService(){
  	this.serverService.startService();
  }

}
