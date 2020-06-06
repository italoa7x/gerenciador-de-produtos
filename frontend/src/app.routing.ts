import { ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { HomeComponent } from './app/components/home/home.component';
import { ProductsCrudComponent } from './app/components/products-crud/products-crud.component';


const APP_ROUTES : Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsCrudComponent},
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);