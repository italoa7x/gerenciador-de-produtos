import { ProductDeleteComponent } from './app/components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './app/components/product/product-update/product-update.component';
import { ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { ProductsCrudComponent } from './app/components/product/products-crud/products-crud.component';
import { ProductCreateComponent } from './app/components/product/product-create/product-create.component';


const APP_ROUTES : Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsCrudComponent},
  {path: 'products/create', component: ProductCreateComponent},
  {path: 'products/update/:id', component: ProductUpdateComponent},
  {path: 'products/delete/:id', component: ProductDeleteComponent},


  ];
  
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);