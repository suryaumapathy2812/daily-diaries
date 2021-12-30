import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalkThroughComponent } from './pages/walk-through/walk-through.component';
import { QuickStartComponent } from './pages/quick-start/quick-start.component';
import { AddTaskComponent } from './pages/task/add-task/add-task.component';
import { ListTaskComponent } from './pages/task/list-task/list-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { QuillModule } from 'ngx-quill';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
