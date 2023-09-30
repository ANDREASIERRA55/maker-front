import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/service/details.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
    // En el método ngOnInit, puedes utilizar this.detailsService para interactuar con el servicio
  }

  // Puedes agregar métodos y lógica relacionados con la edición de detalles aquí

}
