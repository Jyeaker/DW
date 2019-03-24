import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { NgForm } from "@angular/forms";

declare var $: any;

@Component({
  selector: "app-toolsupdate",
  templateUrl: "./toolsupdate.component.html",
  styleUrls: ["./toolsupdate.component.scss"]
})
export class ToolsupdateComponent implements OnInit {
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
    // console.log(data.value);
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    let params = new HttpParams()
      .set("t_id", data.value.tools_id)
      .set("t_name", data.value.tools_name)
      .set("amount", data.value.amount);

    this.http
      .post(`${this.URL}select/toolsedit.php`, params.toString(), {
        headers: headers
      })
      .toPromise()
      .then((value: any) => {
        console.log(value);
        if (value.result) {
          alert("แก้ไขสำเร็จ");
          this.getTools("");
          $("#edit").modal("hide");
        }
      })
      .catch((reason: any) => {
        console.log(reason);
      });
  }
  //----------------------------------------------------------------------
  public onDelete(id: any, name: string): void {
    if (confirm(`ยืนยันการลบข้อมูล ${name}`)) {
      console.log(id);
      this.http
        .get(`${this.URL}/delete/tools.php?id=${id}`)
        .toPromise()
        .then((value: any) => {
          console.log(value);
          this.getTools("");
          alert(`ลบ ${name} สำเร็จ`);
        })
        .catch((reason: any) => {
          console.log(reason);
        });
    }
  }
  //----------------------------------------------------------------------
}
