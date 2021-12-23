import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { QuickStartComponent } from './pages/quick-start/quick-start.component';
import { AddTaskComponent } from './pages/task/add-task/add-task.component';
import { ListTaskComponent } from './pages/task/list-task/list-task.component';
import { WalkThroughComponent } from './pages/walk-through/walk-through.component';

const routes: Routes = [
  { path: "", redirectTo: "quick-start", pathMatch: "full" },
  { path: "quick-start", component: QuickStartComponent },
  { path: "walk-through", component: WalkThroughComponent },
  { path: "task/list", component: ListTaskComponent, canActivate: [AuthGuard] },
  { path: "task/add", component: AddTaskComponent, canActivate: [AuthGuard] },
  { path: "task", component: ListTaskComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "task/list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
