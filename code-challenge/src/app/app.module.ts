import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ResultsComponent } from './components/results/results.component';
import { ResultListComponent } from './shared-components/result-list/result-list.component';
import { ResultItemComponent } from './shared-components/result-item/result-item.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ResultsComponent,
    ResultListComponent,
    ResultItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
