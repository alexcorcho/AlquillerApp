import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent implements OnInit {
  items: any[] = [];
  constructor(private api: AuthService) { }

  ngOnInit(): void {
    this.getProperties()
  }
  getProperties() {
    this.api.getJson().subscribe(resp => {
      this.items = resp
    })
  }
  addToFav(){
    console.log('Añadido a favorito');
  }

}
