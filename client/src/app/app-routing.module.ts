import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RunComponent } from "./run/run.component";
import { ReadComponent } from "./read/read.component";
import { WealthComponent } from "./wealth/wealth.component";
import { LotteryComponent } from "./wealth/lottery/lottery.component";
import { RunToolsComponent } from "./run/run-tools/run-tools.component";
import { ReadLaterComponent } from "./read/read-later/read-later.component";

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
    data: { title: 'Run' },
    children: [
      {
        path: '',
        redirectTo: 'tools',
        pathMatch: 'full'
      },
      {
        path: 'tools',
        component: RunToolsComponent
      }
    ]
  },
  {
    path: 'read',
    component: ReadComponent,
    data: { title: 'Read' },
    children: [
      {
        path: 'readlater',
        component: ReadLaterComponent
      }
    ]
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
