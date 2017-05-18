import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomainsComponent } from './domains.component';
import { DomainComponent } from './domain.component';


const domroutes: Routes = [
     { path: '', component: DomainsComponent},
      { path: ':id', component: DomainComponent}
   ];


@NgModule({
  imports: [ RouterModule.forChild(domroutes) ],
  exports: [ RouterModule ]
})

export class DomainsRoutingModule {}
