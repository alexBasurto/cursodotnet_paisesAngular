import { Component, OnInit } from '@angular/core';
import { Aed, Currencies, IPais } from 'src/app/interfaces/pais.interface';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  divisaSeleccionada: string = '';
  paises: IPais[] = [];
  mostrarError: boolean = false;
  divisas: Object[] = [];


  constructor(private paisesService: PaisesService) {}

  ngOnInit(): void {
    this.getCurrencyNames();
  }

  getPaises() {
    this.paisesService.getPaises(this.divisaSeleccionada).subscribe({
      next: (data: IPais[]) => {
        // console.log(data);
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

  getCurrencyNames(): void {
    this.paisesService.getDivisas().subscribe({
      next: (data: IPais[]) => {
        // almacenar en divisas las monedas únicas
        data.forEach((pais) => {
          if (pais.currencies) {
            Object.keys(pais.currencies).forEach((moneda) => {
              if (!this.divisas.some((x) => x === moneda)) {
                this.divisas.push(moneda);
              }
            });
          }
        }
        

        );
        console.log(this.divisas);

      },
      error: (error) => {
        console.log(error);
      },
      complete: () => console.log('Petición completada')
    })
  }

}
