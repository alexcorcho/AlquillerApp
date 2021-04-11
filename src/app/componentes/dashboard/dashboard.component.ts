import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: any[] = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProperties()
  }
  getProperties() {
    this.api.getJson().subscribe(resp => {
      this.items = resp
    })
  }

}
