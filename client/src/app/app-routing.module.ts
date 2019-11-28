import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RunComponent } from "./run/run.component";
import { ReadComponent } from "./read/read.component";
import { WealthComponent } from "./wealth/wealth.component";
import { LotteryComponent } from "./wealth/lottery/lottery.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'run',
    component: RunComponent,
    data: { title: 'Run' }
  },
  {
    path: 'read',
    component: ReadComponent,
    data: { title: 'Read' }
  },
  {
    path: 'wealth',
    component: WealthComponent,
    data: { title: 'Wealth' },
    children: [
      {
        path: 'lottery',
        component: LotteryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
