import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandasService } from '../bandas.service';

@Component({
  selector: 'app-bandas-list',
  templateUrl: './bandas-list.component.html',
  styleUrls: ['./bandas-list.component.css']
})
export class BandasListComponent implements OnInit {
  bandas: Array<Banda> = [];
  selected = false;
  selectedBanda!: Banda;
  promedio: number = 0;

  constructor(private bandasService: BandasService) { }

  getBandas(): void {
    this.bandasService.getBandas().subscribe(
      {next: bandas => this.bandas = bandas,
      error: e => console.error(e, "Error en el servicio")
    });
  }


  ngOnInit() {
    this.getBandas();
    this.calculateAverage();
  }

  calculateAverage() {
    let sum = 0;
    for (let i = 0; i < this.bandas.length; i++) {
      sum += this.bandas[i].numberOfMembers;
    }
    this.promedio = sum / this.bandas.length;
  }

  getAverage(){
    this.calculateAverage()
    return Math.ceil(this.promedio);
  }

  onSelected(banda : Banda) {
    this.selected = true;
    this.selectedBanda = banda;
  }

}
