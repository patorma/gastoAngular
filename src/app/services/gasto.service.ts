import { Injectable } from '@angular/core';
import { GASTOS } from '../components/gastos/gastos.json';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Gasto } from '../components/gastos/gasto';


@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor() { }

  getGastos():Gasto[]{
    return GASTOS;
  }
}
