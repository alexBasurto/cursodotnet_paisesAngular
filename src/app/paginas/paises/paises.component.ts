import { Component, OnInit } from '@angular/core';
import { IDivisa } from 'src/app/interfaces/divisa.interface';
import { IPais } from 'src/app/interfaces/pais.interface';
import { PaisesService } from 'src/app/services/paises.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
})
export class PaisesComponent implements OnInit {
  divisaSeleccionada: string = '';
  paises: IPais[] = [];
  mostrarError: boolean = false;
  divisas: IDivisa[] = [];

  constructor(private paisesService: PaisesService) {}

  ngOnInit(): void {
    this.getCurrencies();
  }

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
      complete: () => console.log('Petición completada'),
    });
  }

  getCurrencies(): void {
    this.paisesService.getDivisas().subscribe({
      next: (data: IPais[]) => {
        // almacenar en divisas las monedas únicas
        for (let pais of data) {
          if (pais.currencies) {
            for (let [code, currency] of Object.entries(pais.currencies)) {
              if (!this.divisas.find((divisa: any) => divisa.code === code)) {
                this.divisas.push({
                  code: code,
                  name: currency.name,
                  symbol: currency.symbol,
                });
              }
            }
          }
        }
        console.log(this.divisas);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => console.log('Petición completada'),
    });
  }

  clear(table: Table) {
    table.clear();
  }
}
