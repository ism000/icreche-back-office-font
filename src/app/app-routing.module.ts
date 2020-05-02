import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {ActionsListComponent} from "./actions-list/actions-list.component";

const appRoutes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'actionList', component: ActionsListComponent},
  { path: '',redirectTo:'/home',pathMatch:'full' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
