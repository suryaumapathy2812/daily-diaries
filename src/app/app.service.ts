import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  get apiUrl(): string {
    const url = localStorage.getItem("mockUrl");
    return `${url}`;
  }

  set apiUrl(url: string) {
    localStorage.setItem("mockUrl", url);
  }


  getTaskList() {
    return this.http.get(this.apiUrl).pipe(
      map((result: any) => result.filter((task: any) => {
        const today = new Date().setHours(0, 0, 0, 0);
        const created_date = new Date(task.createdAt).getTime();
        return today < created_date;
      })
      ));
  }

  setTask(taskObject: any) {
    return this.http.post(this.apiUrl, taskObject);
  }

}
