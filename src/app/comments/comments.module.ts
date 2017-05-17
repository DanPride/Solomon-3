import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommentsComponent } from './comments.component';
import { CommentComponent } from './comment.component';
import { CommentsRoutingModule } from './comments-routing.module';

import {WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommentsRoutingModule
  ],
     declarations: [CommentsComponent, CommentComponent],
     providers: []

})
export  class CommentsModule { }



