import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WealthComponent } from './wealth/wealth.component';
import { HomeComponent } from './home/home.component';
import { RunComponent } from './run/run.component';
import { ReadComponent } from './read/read.component';
import { LotteryComponent } from './wealth/lottery/lottery.component';

@NgModule({
  declarations: [
    AppComponent,
    WealthComponent,
    HomeComponent,
    RunComponent,
    ReadComponent,
    LotteryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
