import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import SecureLS from 'secure-ls';
import { GlobalConstants } from './core/constant';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private ls: SecureLS

  constructor(
    private http: HttpClient,
  ) {
    this.ls = new SecureLS({ encodingType: 'des', isCompression: false, encryptionSecret: GlobalConstants.secureKey });
  }

  getLs = (key: string) => {
    return this.ls.get(key);
  }

  setLs = (key: string, value: any) => {
    return this.ls.set(key, value);
  }


  get apiUrl(): string {
    const url = this.getLs("mockUrl");
    return `${url}`;
  }

  set apiUrl(url: string) {
    this.setLs("mockUrl", url);
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
