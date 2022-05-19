import { Component, Input, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandasService } from '../bandas.service';

@Component({
  selector: 'app-bandas-detail',
  templateUrl: './bandas-detail.component.html',
  styleUrls: ['./bandas-detail.component.css']
})
export class BandasDetailComponent implements OnInit {

  @Input() banda!: Banda;
  constructor(private bandasService:BandasService) { }

  ngOnInit() {
  }

}
