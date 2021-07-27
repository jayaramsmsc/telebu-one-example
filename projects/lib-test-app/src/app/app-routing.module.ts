import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { GrpTalkModule } from "grp-talk"

const routes: Routes = [
  { path: "grptalk", loadChildren: () =>  import("grp-talk").then(m => m.GrpTalkModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
