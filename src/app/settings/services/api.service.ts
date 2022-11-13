import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ITask} from "../interfaces/itask";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addTask(task:ITask):Observable<ITask>{
    return this.http.post<ITask>('https://tasks-d16ae-default-rtdb.firebaseio.com/tasks.json', task)
      .pipe(map(res => {
          return {
            ...task,
            date: new Date(res.date),
          }
        })
      );
  }

  getAll():Observable<ITask[]> {
    return this.http.get<ITask[]>('https://tasks-d16ae-default-rtdb.firebaseio.com/tasks.json')
      .pipe( map ( res => {
        return Object.keys(res)
          .map( (key:any) => ({
            ...res[key],
            id: key,
            date: new Date(res[key].date)
          }));
      }));
  }

  deleteTask(id: string){
    return this.http.delete<any>(`https://tasks-d16ae-default-rtdb.firebaseio.com/tasks/${id}.json`);
  }

}
