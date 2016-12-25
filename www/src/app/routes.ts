import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {PackagesComponent} from '../packages/packages.component';

const routes: Routes = [
    {path: '', redirectTo: '/packages', pathMatch: 'full'},
    {path: 'packages', component: PackagesComponent},
];

export const routing = RouterModule.forRoot(routes);