import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styles: [
  ]
})
export class ListTaskComponent implements OnInit {

  taskList!: Observable<any>;

  constructor(
    private service: AppService
  ) { }

  ngOnInit(): void {
    this.taskList = this.service.getTaskList()
  }


  getTime(dateNumber: number) {
    const date = new Date(dateNumber);
    return date
  }

}
