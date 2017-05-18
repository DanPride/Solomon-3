import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DomainsComponent } from './domains.component';
import { DomainService } from './domains.service';
import { DomainsRoutingModule } from './domains-routing.module';
import { DomainComponent } from './domain.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DomainsRoutingModule
    ],
  declarations: [DomainsComponent, DomainComponent],
  providers: []

})
export class DomainsModule { }
