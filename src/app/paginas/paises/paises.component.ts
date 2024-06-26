import { Component } from '@angular/core';
import { IPais } from 'src/app/interfaces/pais.interface';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {
  divisaSeleccionada: string = '';
  paises: IPais[] = [];
  mostrarError: boolean = false;

  constructor(private paisesService: PaisesService) {}

  getPaises() {
    this.paisesService.getPaises(this.divisaSeleccionada).subscribe({
      next: (data: IPais[]) => {
        console.log(data);
        this.paises = data;
        this.mostrarError = false;
    },
    error: (error) => {
      console.log(error);
      this.mostrarError = true;
    },
    complete: () => console.log('Petición completada')
    }
    );
  }

}
