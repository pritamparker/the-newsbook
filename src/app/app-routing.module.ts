import { HomeDataComponent } from './body/data-panel/home-data/home-data.component';
import { NewsDataComponent } from './body/data-panel/news-data/news-data.component';
import { DataPanelComponent } from './body/data-panel/data-panel.component';
import { LeftPanelComponent } from './body/left-panel/left-panel.component';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './body/data-panel/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes:Routes=[
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'home',component:DataPanelComponent, children:[
    { path:'',component:HomeDataComponent}
  ]},
  { path:'about',component:AboutComponent},
  { path:':id',component:NewsDataComponent}
];
@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})
export class AppRoutingModule  {

}
