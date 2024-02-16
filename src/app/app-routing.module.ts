import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssetCardComponent } from './app-widgets/asset-card/asset-card/asset-card.component';

const routes: Routes = [
  {
    path: "",
    redirectTo:'dashboard',
    pathMatch: 'full'
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "my-assets",
    component: AssetCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
