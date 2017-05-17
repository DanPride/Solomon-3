import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';
import { BugService } from './bugs/bugs.service';
import { CommentService } from './comments/comments.service';
import { DayService } from './days/days.service';
import { DomainService } from './domains/domains.service';
import { DriveService } from './drives/drives.service';
import { EventService } from './events/events.service';
import { FeedService } from './feeds/feeds.service';
import { InvoiceService } from './invoices/invoices.service';
import { Iso3166Service } from './iso3166s/iso3166s.service';
import { Iso639Service } from './iso639s/iso639s.service';
import { LangerrService } from './langerrs/langerrs.service';
import { LangService } from './langs/langs.service';
import { Lang1Service } from './langs1/langs1.service';
import { Lang2Service } from './langs2/langs2.service';
import { Lang3Service } from './langs3/langs3.service';
import { Lang4Service } from './langs4/langs4.service';
import { LetterService } from './letters/letters.service';
import { LettextService } from './lettexts/lettexts.service';
import { LetvarService } from './letvars/letvars.service';
import { LineitemService } from './lineitems/lineitems.service';
import { LogService } from './logs/logs.service';
import { OutputService } from './outputs/outputs.service';
import { PersonService } from './people/people.service';
import { PhotoService } from './photos/photos.service';
import { PlaceService } from './places/places.service';
import { PopupService } from './popups/popups.service';
import { PostService } from './posts/posts.service';
import { RideService } from './rides/rides.service';
import { RunService } from './runs/runs.service';
import { Sched86Service } from './sched86s/sched86s.service';
import { ScheduleService } from './schedules/schedules.service';
import { UserService } from './users/users.service';
import { ZeroService } from './zeros/zeros.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AppService,
    BugService,
    CommentService,
    DayService,
    DomainService,
    DriveService,
    EventService,
    FeedService,
    InvoiceService,
    Iso3166Service,
    Iso639Service,
    LangerrService,
    LangService,
    Lang1Service,
    Lang2Service,
    Lang3Service,
    Lang4Service,
    LetterService,
    LettextService,
    LetvarService,
    LineitemService,
    LogService,
    OutputService,
    PersonService,
    PhotoService,
    PlaceService,
    PopupService,
    PostService,
    RideService,
    RunService,
    Sched86Service,
    ScheduleService,
    UserService,
    ZeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
//import { LogsModule } from './logs/logs.module';
//import { BugsModule } from './bugs/bugs.module';
//import { CommentsModule } from './comments/comments.module';
//import { DaysModule } from './days/days.module';
//Moved domains to routing module for testing
//import { EventsModule } from './events/events.module';
//import { FeedsModule } from './feeds/feeds.module';
//import { InvoicesModule } from './invoices/invoices.module';
//import { Iso3166sModule } from './iso3166s/iso3166s.module';
//import { Iso639sModule } from './iso639s/iso639s.module';
//import { LangerrsModule} from "./langerrs/langerrs.module";
//import { LangsModule} from "./langs/langs.module";
//import { Langs1Module} from "./langs1/langs1.module";
//import { Langs2Module} from "./langs2/langs2.module";
//import { Langs3Module} from "./langs3/langs3.module";
//import { Langs4Module} from "./langs4/langs4.module";
//import { LettersModule } from './letters/letters.module';
//import { LettextsModule } from './lettexts/lettexts.module';
//import { LetvarsModule } from './letvars/letvars.module';
//import { LineitemsModule } from './lineitems/lineitems.module';
//import { OutputsModule } from './outputs/outputs.module';
//import { PeopleModule } from './people/people.module';
//import { PhotosModule } from './photos/photos.module';
//import { PlacesModule } from './places/places.module';
//import { PopupsModule } from './popups/popups.module';
//import { PostsModule } from './posts/posts.module';
//import { RidesModule } from './rides/rides.module';
//import { RunsModule } from './runs/runs.module';
//import { Sched86sModule } from './sched86s/sched86s.module';
//import { SchedulesModule } from './schedules/schedules.module';
//import { UsersModule } from './users/users.module';
//import { ZerosModule } from './zeros/zeros.module';
 * */
