import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BugsRoutingModule } from './bugs-routing.module';
import { BugComponent } from './bug.component';
import { BugsComponent } from './bugs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BugsRoutingModule
   ],
   declarations: [BugComponent, BugsComponent],
   providers: []
})
export class BugsModule { }
