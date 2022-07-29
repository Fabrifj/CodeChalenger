import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { IndexComponent} from "./components/index/index.component"
import { ResultsComponent} from "./components/results/results.component"


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'results',
    component: ResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
