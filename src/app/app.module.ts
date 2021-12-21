import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalkThroughComponent } from './pages/walk-through/walk-through.component';
import { QuickStartComponent } from './pages/quick-start/quick-start.component';
import { AddTaskComponent } from './pages/task/add-task/add-task.component';
import { ListTaskComponent } from './pages/task/list-task/list-task.component';
import { MomentModule } from 'ngx-moment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WalkThroughComponent,
    QuickStartComponent,
    AddTaskComponent,
    ListTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
