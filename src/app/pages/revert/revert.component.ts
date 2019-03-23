import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-revert",
  templateUrl: "./revert.component.html",
  styleUrls: ["./revert.component.scss"]
})
export class RevertComponent implements OnInit {
  private URL: string = "http://127.0.0.1/hello_cpe/api/";
  public student: any = null;
  public selectStudent: string = "";
  public borrowList: any = null;
  constructor(private http: HttpClient) {}
  // ------------------------------------------------------------
  ngOnInit() {
    this.getStudent();
  }
  // ------------------------------------------------------------
  public studentBorrow(): void {
    if (this.selectStudent.length > 0)
      this.http
        .get(`${this.URL}select/borrow.php?std_id=${this.selectStudent}`)
        .toPromise()
        .then((value: any) => {
          console.log(value);
          if (value.length > 0) {
            this.borrowList = value.result;
          } else {
            this.borrowList = null;
          }
        })
        .catch((reason: any) => {
          this.borrowList = null;
          console.log(reason);
        });
  }
  // ------------------------------------------------------------
  private getStudent() {
    this.http
      .get(`${this.URL}select/student.php`)
      .toPromise()
      .then((value: any) => {
        console.log(value);
        if (value.length > 0) {
          this.student = value.result;
        } else {
          this.student = null;
        }
      })
      .catch((reason: any) => {
        this.student = null;
        console.log(reason);
      });
  }
  // ------------------------------------------------------------
  public onRevert(borrowId: any, toolsId: any, borrowAmount: any): void {
    // console.log(borrowId);
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    let params = new HttpParams()
      .set("borrow_id", borrowId)
      .set("tools_id", toolsId)
      .set("amount", borrowAmount);

    this.http
      .post(`${this.URL}insert/revert.php`, params.toString(), {
        headers: headers
      })
      .toPromise()
      .then((value: any) => {
        console.log(value);
        if (value.result) {
          alert("คืนของสำเร็จ");
          this.studentBorrow();
        }
      })
      .catch((reason: any) => {
        console.log(reason);
      });
  }
  // ------------------------------------------------------------
}
