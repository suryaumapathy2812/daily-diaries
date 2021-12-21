import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuickStartComponent } from './pages/quick-start/quick-start.component';
import { AddTaskComponent } from './pages/task/add-task/add-task.component';
import { ListTaskComponent } from './pages/task/list-task/list-task.component';
import { WalkThroughComponent } from './pages/walk-through/walk-through.component';

const routes: Routes = [
  { path: "", redirectTo: "quick-start", pathMatch: "full" },
  { path: "quick-start", component: QuickStartComponent },
  { path: "walk-through", component: WalkThroughComponent },
  { path: "task/list", component: ListTaskComponent },
  { path: "task/add", component: AddTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
