import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RevertComponent } from './pages/revert/revert.component';
import { StudentComponent } from './pages/student/student.component';
import { StudentInsertComponent } from './pages/student-insert/student-insert.component';
import { StudentupdateComponent } from './pages/studentupdate/studentupdate.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, RevertComponent, StudentComponent, StudentInsertComponent, StudentupdateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
