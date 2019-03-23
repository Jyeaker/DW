import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { NgForm } from "@angular/forms";

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public searchTools: string = "";
  private URL: string = "http://127.0.0.1/hello_cpe/api/";
  public toolsData: any = null;
  public readShoping: any = null;
  public student: any = null;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTools("");
    this.getStudent();
  }
  // ------------------------------------------------------------
  public selectItem(id: any, name: any, amount: any): void {
    this.readShoping = {
      id: id,
      name: name,
      amount: amount
    };
  }
  // ------------------------------------------------------------
  public onShoping(x: NgForm): void {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    let params = new HttpParams()
      .set("std_id", x.value.std_id)
      .set("tools_id", x.value.tools_id)
      .set("amount", x.value.amount);

    this.http
      .post(`${this.URL}insert/borrow.php`, params.toString(), {
        headers: headers
      })
      .toPromise()
      .then((value: any) => {
        console.log(value);
        if (value.result) {
          this.getTools("");
          alert("ยืมของสำเร็จ");
          $('#shoppingModal').modal('hide')
        }
      })
      .catch((reason: any) => {
        console.log(reason);
      });
  }
  // ------------------------------------------------------------
  public getTools(search: string): void {
    this.http
      .get(`${this.URL}select/tools.php?search=${search}`)
      .toPromise()
      .then((value: any) => {
        console.log(value);
        if (value.length > 0) {
          this.toolsData = value.result;
        } else {
          this.toolsData = null;
        }
      })
      .catch((reason: any) => {
        this.toolsData = null;
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
}
