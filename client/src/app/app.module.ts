import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WealthComponent } from './wealth/wealth.component';
import { HomeComponent } from './home/home.component';
import { RunComponent } from './run/run.component';
import { ReadComponent } from './read/read.component';
import { LotteryComponent } from './wealth/lottery/lottery.component';
import { RunToolsComponent } from './run/run-tools/run-tools.component';
import { ReadLaterComponent } from './read/read-later/read-later.component';

@NgModule({
  declarations: [
    AppComponent,
    WealthComponent,
    HomeComponent,
    RunComponent,
    ReadComponent,
    LotteryComponent,
    RunToolsComponent,
    ReadLaterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
