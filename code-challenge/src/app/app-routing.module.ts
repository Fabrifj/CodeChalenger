import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { IndexComponent} from "./components/index/index.component"
import { ResultsComponent} from "./components/results/results.component"
import { ContactComponent} from "./components/contact/contact.component"


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
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
