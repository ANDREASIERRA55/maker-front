import { Component, OnInit } from '@angular/core';
import { DetailModel } from './models/detail';
import { DetailsService } from './service/details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  details?: DetailModel[];
  detailService: any;

  constructor(detailService: DetailsService) {}
  
  ngOnInit(): void {
    this.editDdetails()
  }
  editDdetails() {
    throw new Error('Method not implemented.');
  }

  editDetails(): void {
    const id = 1; // Reemplaza con el ID correcto
    const dataToUpdate = {}; // Reemplaza con los datos que deseas actualizar
    
    this.detailService.editDetails(id, dataToUpdate).subscribe({

      next: (data: any) => {
        // Puedes realizar acciones adicionales aquí si es necesario
        console.log('Detalle actualizado:', data);
      },
      error: (err: any) => console.log(err)
    });
  }





  title = 'maker-front';
}
