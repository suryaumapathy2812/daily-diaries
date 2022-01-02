import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styles: [
    `
    p {
      font-family: 'Lato', sans-serif;
    }
  `
  ]
})
export class ListTaskComponent implements OnInit {

  taskList!: Observable<any>;
  name!: string;

  constructor(
    private service: AppService
  ) { }

  ngOnInit(): void {
    this.name = this.service.getLs("name");
    this.taskList = this.service.getAllTasks();
  }


  getTime(dateNumber: number) {
    const date = new Date(dateNumber);
    return date
  }

}
