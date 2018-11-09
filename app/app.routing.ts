import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { V1Component }   from './v1/v1.component';   


//����
const appRoutes: Routes = [

  // ,{
  //   path: '',
  //   redirectTo: '/firstpage',
  //   pathMatch: 'full'
  // }
  /*,{ 
   path: '**', component: CmmFirstpageComponent
  }*/
];



export const          appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders  = RouterModule.forRoot(appRoutes);



