import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlindtestrapComponent } from './home/factory/pages/blindtestrap/blindtestrap.component';
import { BuildideasComponent } from './home/factory/pages/buildideas/buildideas.component';
import { CvComponent } from './home/factory/pages/cv/cv.component';
import { FinalschoolprojectComponent } from './home/factory/pages/finalschoolproject/finalschoolproject.component';
import { IdealtekComponent } from './home/factory/pages/idealtek/idealtek.component';
import { MashuphelperComponent } from './home/factory/pages/mashuphelper/mashuphelper.component';
import { MenulibComponent } from './home/factory/pages/menulib/menulib.component';
import { PhotocleanerComponent } from './home/factory/pages/photocleaner/photocleaner.component';
import { PlanetgeneratorComponent } from './home/factory/pages/planetgenerator/planetgenerator.component';
import { SpaceconquestComponent } from './home/factory/pages/spaceconquest/spaceconquest.component';
import { TwitchpartyComponent } from './home/factory/pages/twitchparty/twitchparty.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'resume', component: CvComponent },
  { path: 'twitchparty', component: TwitchpartyComponent },
  { path: 'idealtek', component: IdealtekComponent },
  { path: 'photocleaner', component: PhotocleanerComponent },
  { path: 'spaceconquest', component: SpaceconquestComponent },
  { path: 'menulib', component: MenulibComponent },
  { path: 'mashuphelper', component: MashuphelperComponent },
  { path: 'blindtestrap', component: BlindtestrapComponent },
  { path: 'buildideas', component: BuildideasComponent },
  { path: 'planetgenerator', component: PlanetgeneratorComponent },
  { path: 'finalschoolproject', component: FinalschoolprojectComponent }, 
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
