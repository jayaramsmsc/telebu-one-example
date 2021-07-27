import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrpTalkComponent } from './grp-talk.component';
import { Route2Component } from './route2/route2.component';

const grpTalkRoutes: Routes = [
  { path: "", component: GrpTalkComponent },
  { path: "secondPage", component: Route2Component }
];


@NgModule({
  declarations: [
    GrpTalkComponent,
    Route2Component
  ],
  imports: [
    RouterModule.forChild(grpTalkRoutes)
  ],
  exports: [
    // GrpTalkComponent,
    // Route2Component,
    // RouterModule
  ]
})
export class GrpTalkModule { 
  constructor(){
    console.log("from lib")
  }
}
