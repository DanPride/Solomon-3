
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
const appRoutes: Routes = [
{path: 'comments', loadChildren: './comments/comments.module#CommentsModule'},
{path: 'drives', loadChildren: './drives/drives.module#DrivesModule'},
{path: 'events', loadChildren: './events/events.module#EventsModule'},
{path: 'outputs', loadChildren: './outputs/outputs.module#OutputsModule'},
{path: 'people', loadChildren: './people/people.module#PeopleModule'},
{path: 'places', loadChildren: './places/places.module#PlacesModule'},
{path: 'rides', loadChildren: './rides/rides.module#RidesModule'},
{path: 'runs', loadChildren: './runs/runs.module#RunsModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule {}
