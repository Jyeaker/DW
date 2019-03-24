import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.scss']
})
export class StudentupdateComponent implements OnInit {
  public searchTools: string = "";
  private URL: string = "http://127.0.0.1/hello_cpe/api/";
  public toolsData: any = null;
  public readEdit: any = null;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTools("");
  }
  // ------------------------------------------------------------
  public selectItem(data: any): void {
    this.readEdit = data;
    console.log(data);
  }

  //----------------------------------------------------------------------
  public getTools(search: string): void {
    this.http
      .get(`${this.URL}select/toolsselect.php?search=${search}`)
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
  //----------------------------------------------------------------------
  public onEdit(data: NgForm): void {
    console.log(data.value);
}
}

