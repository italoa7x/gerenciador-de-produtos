import { ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { ProductsCrudComponent } from './app/components/product/products-crud/products-crud.component';
import { ProductCreateComponent } from './app/components/product/product-create/product-create.component';


const APP_ROUTES : Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsCrudComponent},
  {path: 'products/create', component: ProductCreateComponent},
  ];
  
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);