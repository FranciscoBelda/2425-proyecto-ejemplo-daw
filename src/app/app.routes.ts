import { Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {TypescriptComponent} from "./components/typescript/typescript.component";
import {DatosApiComponent} from "./components/datos-api/datos-api.component";
import {ProductListComponent} from "./components/products/product-list/product-list.component";
import {ProductDetailComponent} from "./components/products/product-detail/product-detail.component";
import {EjemplosComponent} from "./components/signals/ejemplos/ejemplos.component";
import {ViewChildrenComponent} from "./components/signals/view-children/view-children.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'typescript',
    component: TypescriptComponent
  },
  {
    path: 'datos-api',
    component: DatosApiComponent
  },
  {
    path: 'product/list',
    component: ProductListComponent
  },
  {
    path: 'product/detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'signals/ejemplo',
    component: EjemplosComponent
  },
  {
    path: 'signals/children',
    component: ViewChildrenComponent
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  }
];
