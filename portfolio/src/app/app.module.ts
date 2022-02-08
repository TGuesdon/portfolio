import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FactoryComponent } from './home/factory/factory.component';
import { LightComponent } from './home/factory/light/light.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FactoryComponent,
    LightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
