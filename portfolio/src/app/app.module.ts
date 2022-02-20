import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FactoryComponent } from './home/factory/factory.component';
import { LightComponent } from './home/factory/light/light.component';
import { AssemblyComponent } from './home/factory/assembly/assembly.component';
import { ScreenRouterComponent } from './home/factory/screen-router/screen-router.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CvComponent } from './home/factory/pages/cv/cv.component';
import { TwitchpartyComponent } from './home/factory/pages/twitchparty/twitchparty.component';
import { IdealtekComponent } from './home/factory/pages/idealtek/idealtek.component';
import { PhotocleanerComponent } from './home/factory/pages/photocleaner/photocleaner.component';
import { SpaceconquestComponent } from './home/factory/pages/spaceconquest/spaceconquest.component';
import { MenulibComponent } from './home/factory/pages/menulib/menulib.component';
import { MashuphelperComponent } from './home/factory/pages/mashuphelper/mashuphelper.component';
import { BlindtestrapComponent } from './home/factory/pages/blindtestrap/blindtestrap.component';
import { BuildideasComponent } from './home/factory/pages/buildideas/buildideas.component';
import { PlanetgeneratorComponent } from './home/factory/pages/planetgenerator/planetgenerator.component';
import { FinalschoolprojectComponent } from './home/factory/pages/finalschoolproject/finalschoolproject.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FactoryComponent,
    LightComponent,
    AssemblyComponent,
    ScreenRouterComponent,
    CvComponent,
    TwitchpartyComponent,
    IdealtekComponent,
    PhotocleanerComponent,
    SpaceconquestComponent,
    MenulibComponent,
    MashuphelperComponent,
    BlindtestrapComponent,
    BuildideasComponent,
    PlanetgeneratorComponent,
    FinalschoolprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
