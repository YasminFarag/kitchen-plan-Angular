import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IEmployee } from "./employees";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  public _localUrl: string = "/assets/data/employee.json";

  constructor(private http: HttpClient) {}

  emplyeeData(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._localUrl);

    //console.log(localUrl);
  }
}
