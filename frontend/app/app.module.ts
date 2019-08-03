import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRouterModule} from './app.router';
import {HomepageComponent} from './homepage/homepage.component';
import {OrderModule} from './order/order.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    OrderModule,
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
