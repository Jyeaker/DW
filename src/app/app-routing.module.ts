import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RevertComponent } from "./pages/revert/revert.component";
import { StudentComponent } from "./pages/student/student.component";
import { StudentInsertComponent } from './pages/student-insert/student-insert.component';
import { StudentupdateComponent } from './pages/studentupdate/studentupdate.component';
import { ToolsinsertComponent } from './pages/toolsinsert/toolsinsert.component';
import { ToolsupdateComponent } from './pages/toolsupdate/toolsupdate.component';
import { ToolstypeComponent } from './pages/toolstype/toolstype.component';



const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "revert", component: RevertComponent },
  { path: "student", component: StudentComponent },
  { path: "student_insert", component: StudentInsertComponent },
  { path: "studentupdate", component: StudentupdateComponent },
  { path: "toolsinsert", component: ToolsinsertComponent },
  { path: "toolsupdate", component: ToolsupdateComponent },
  { path: "toolstype", component: ToolstypeComponent },
  
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
