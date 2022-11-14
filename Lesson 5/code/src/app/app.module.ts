import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { GuardGuard } from './guard.guard';


const routesOptions: ExtraOptions = {
  anchorScrolling: 'enabled'
}

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'child-one/:id',
        component: ChildOneComponent,
        canActivate: [GuardGuard]
      },
      {
        path: 'child-two',
        component: ChildTwoComponent,
        data: {
          name: 'Pavlo'
        }
      }
    ]
  },
  {
    path: 'lazy',
    loadChildren: ()=> import('./lazy/lazy.module').then(m=>m.LazyModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    AboutComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes, routesOptions)
  ],
  providers: [GuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
