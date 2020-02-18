import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IWeek } from "./weekdays";

@Injectable({
  providedIn: "root"
})
export class WeekdaysService {
  public weekData: string = "/assets/data/weekdays.json";

  constructor(private http: HttpClient) {
    console.log(this.weekData);
  }
  /* private _autoRefresh = new Subject<void>();

  get autoRefresh() {
    return this._autoRefresh
  }
 */

  getWeekDays(): Observable<IWeek[]> {
    return this.http.get<IWeek[]>(this.weekData);
    /* .pipe(tap(()=>{
      this._autoRefresh.next()
    })

    )*/
  }
}
