import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { ApiHttpService } from "../api-service/http.service";

@Injectable({
  providedIn: "root",
})
export class EmployeeDataHandlerService {
  constructor(private http: ApiHttpService) {}

  getData(): Observable<any> {
    return this.http.get("https://hitesh-api.herokuapp.com/posts/");
  }
  getDataById(id): Observable<any> {
    return this.http.get("https://hitesh-api.herokuapp.com/posts/" + id);
  }
}
