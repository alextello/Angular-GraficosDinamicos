import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';

@NgModule({
  declarations: [AppComponent, LineChartComponent, BarChartComponent, PieChartComponent, NavbarComponent, RadarChartComponent],
  imports: [BrowserModule, ChartsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
