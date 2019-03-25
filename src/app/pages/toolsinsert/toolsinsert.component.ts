import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolsinsert',
  templateUrl: './toolsinsert.component.html',
  styleUrls: ['./toolsinsert.component.scss']
})
export class ToolsinsertComponent implements OnInit {
  private URL: string = "http://127.0.0.1/hello_cpe/api/";
  constructor(private http:HttpClient) {}

  ngOnInit() {}

  public onInsert(data: NgForm): void {
    // console.log(data.value);
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });


    let params = new HttpParams()
      .set("t_id", data.value.t_id)
      .set("t_name", data.value.t_name)
      .set("tt_id", data.value.tt_id)
      .set("amount", data.value.amount);

    this.http
      .post(`${this.URL}insert/tools.php`, params.toString(), {
        headers: headers
      })
      .toPromise()
      .then((value: any) => {
        console.log(value);
        if (value.result) {
 
          alert("เพิ่มอุปกรณ์สำเร็จ");
          location.reload();
        }
      })
      .catch((reason: any) => {
        console.log(reason);
      });
  }
}
