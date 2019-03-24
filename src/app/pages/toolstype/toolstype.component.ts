import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolstype',
  templateUrl: './toolstype.component.html',
  styleUrls: ['./toolstype.component.scss']
})
export class ToolstypeComponent implements OnInit {
  private URL: string = "http://127.0.0.1/hello_cpe/api/";
  constructor(private http:HttpClient) { }

  ngOnInit() {}
    public onInsert(data: NgForm): void {
      // console.log(data.value);
      const headers = new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      });
  
  
      let params = new HttpParams()
        .set("tt_id", data.value.tt_id)
        .set("tt_name", data.value.tt_name);
  
      this.http
        .post(`${this.URL}insert/toolstype.php`, params.toString(), {
          headers: headers
        })
        .toPromise()
        .then((value: any) => {
          console.log(value);
          if (value.result) {
   
            alert("เพิ่มประเภทอุปกรณ์สำเร็จ");
  
          }
        })
        .catch((reason: any) => {
          console.log(reason);
        });
      }

}
