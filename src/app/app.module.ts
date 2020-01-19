import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { GastoService } from './services/gasto.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GastoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
