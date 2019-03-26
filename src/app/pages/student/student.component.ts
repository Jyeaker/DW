import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { NgForm } from "@angular/forms";

declare var $: any;

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public searchTools: string = "";
  private URL: string = "http://127.0.0.1/hello_cpe/api/";
  public toolsData: any = null;
  public toolData: any = null;
  public readEdit: any = null;
  public amountData: any = null;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAmount("");
    this.getdate("");
    this.getsum("");
  }
  public getAmount(search: string): void {
    this.http
      .get(`${this.URL}select/sqltoy.php?search=${search}`)
      .toPromise()
      .then((value: any) => {
        console.log(value);
        if (value.length > 0) {
          this.toolData = value.result;
        } else {
          this.toolData = null;
        }
      })
      .catch((reason: any) => {
        this.toolData = null;
        console.log(reason);
      });
  }
//-------------------------------------------------------------------//
public getdate(search: string): void {
  this.http
    .get(`${this.URL}select/sqljoke.php?search=${search}`)
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

//--------------------------------------------------------------------------//
public getsum(search: string): void {
  this.http
    .get(`${this.URL}select/sqijiw.php?search=${search}`)
    .toPromise()
    .then((value: any) => {
      console.log(value);
      if (value.length > 0) {
        this.amountData = value.result;
      } else {
        this.amountData = null;
      }
    })
    .catch((reason: any) => {
      this.amountData = null;
      console.log(reason);
    });
}



}
