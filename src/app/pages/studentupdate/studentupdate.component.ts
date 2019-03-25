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
  public searchStudent: string = "";
  private URL: string = "http://127.0.0.1/hello_cpe/api/";
  public studentData: any = null;
  public readEdit: any = null;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStudent("");
  }
  // ------------------------------------------------------------
  public selectItem(data: any): void {
    this.readEdit = data;
    console.log(data);
  }

  //----------------------------------------------------------------------
  public getStudent(search: string): void {
    this.http
      .get(`${this.URL}select/student.php?search=${search}`)
      .toPromise()
      .then((value: any) => {
        console.log(value);
        if (value.length > 0) {
          this.studentData = value.result;
        } else {
          this.studentData = null;
        }
      })
      .catch((reason: any) => {
        this.studentData = null;
        console.log(reason);
      });
  }
  //----------------------------------------------------------------------
  public onEdit(data: NgForm): void {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    let params = new HttpParams()
      .set("st_id",data.value.id)
      .set("st_fname",data.value.fname)
      .set("st_lname",data.value.lname)
      .set("st_phone",data.value.phone);

    this.http
      .post(`${this.URL}select/studentedit.php`, params.toString(), {
        headers: headers
      })
      .toPromise()
      .then((value: any) => {
        console.log(value);
        if(value.result) {
          alert("แก้ไขสำเร็จ");
          this.getStudent("");
          $("#edit").modal("hide");
        }
      })
      .catch((reason: any) => {
        console.log(reason);
      });
  }
  //----------------------------------------------------------------------
  public onDelete(id: any, fname: string): void {
    if (confirm(`ยืนยันการลบข้อมูล ${fname}`)) {
      console.log(id);
      this.http
        .get(`${this.URL}/delete/student.php?id=${id}`)
        .toPromise()
        .then((value: any) => {
          if(value.result){
          console.log(value);
          this.getStudent("");
          alert(`ลบ ${fname} สำเร็จ`);
          }else{
            alert(`ลบ ${fname} ไม่ได้เนื่องจาก ${fname} เป็นคีย์นอกของตาราง ยืม-คืน`)
          }
        })
        .catch((reason: any) => {
          console.log(reason);
        });
    }
  }
//----------------------------------------------------------------------
}

