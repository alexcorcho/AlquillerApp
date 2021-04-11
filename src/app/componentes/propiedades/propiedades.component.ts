import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent implements OnInit {
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

  addToFav(){
    console.log('addToFav preset');
  }


}
