import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RunComponent } from "./run/run.component";
import { ReadComponent } from "./read/read.component";
import { WealthComponent } from "./wealth/wealth.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'run',
    component: RunComponent
  },
  {
    path: 'read',
    component: ReadComponent
  },
  {
    path: 'wealth',
    component: WealthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
