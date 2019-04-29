import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	showSidebar: boolean = false;
	
  constructor(private serverService : ServerService) { }

  ngOnInit() {
  }


  toggleSidebar() {
    this.showSidebar = this.showSidebar ? false : true;
  }

  startService() {
    this.serverService.startService().then(() => {
      console.log("Server started")
    });
  }

}
