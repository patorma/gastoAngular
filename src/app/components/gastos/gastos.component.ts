import { Component, OnInit } from '@angular/core';
import { GastoService } from '../../services/gasto.service';
import { Gasto } from './gasto';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  gastos: Gasto[]; 

  constructor(private gastoService: GastoService) { }

  ngOnInit() {
    this.gastos = this.gastoService.getGastos();
  }

}
