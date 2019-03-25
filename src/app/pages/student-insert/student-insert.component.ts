import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-student-insert",
  templateUrl: "./student-insert.component.html",
  styleUrls: ["./student-insert.component.scss"]
})
export class StudentInsertComponent implements OnInit {
  private URL: string = "http://127.0.0.1/hello_cpe/api/";
  constructor(private http:HttpClient) {}

  ngOnInit() {}

  public onInsert(data: NgForm): void {
    // console.log(data.value);
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    let params = new HttpParams()
      .set("std_id", data.value.std_id) //สีส้มตรงกับ php
      .set("fname", data.value.fname)
      .set("lname", data.value.lname)
      .set("phone", data.value.phone);

    this.http
      .post(`${this.URL}insert/student.php`, params.toString(), {
        headers: headers
      })
      .toPromise()
      .then((value: any) => {
        console.log(value);
        if (value.result) {
 
          alert("เพิ่มสำเร็จ");
          location.reload();
        }
      })
      .catch((reason: any) => {
        console.log(reason);
      });
  }
}
