import { Component, OnInit, Input, Inject } from "@angular/core";
import { EventEmitterService } from "../../event-emitter.service";
import { TeacherfetchService } from "../../service/teacherfetch.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ModeladminComponent } from '../adminview/adminview.component';

export interface DialogData {
  name: string,
  type: number
}
@Component({
  selector: "app-adminview",
  templateUrl: "./adminview.component.html",
  styleUrls: ["./adminview.component.css"]
})
export class AdminviewComponent implements OnInit {
  hello = false;
  search1;
  search2;
  number;
  teacher = true;
  student = true;
  course = true;
  @Input() value: any;
  constructor(
    private admin: TeacherfetchService,
    private eventEmitterService: EventEmitterService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("admin")) {
      this.hello = true;
    }
  }
  openDialog(): void {
    var name: string
    if (this.number == 1) {
      name = "student"
    }
    else if (this.number == 2) {
      name = "teacher"
    }
    else {
      name = "course"
    }
    const dialogRef = this.dialog.open(ModeladminComponent, {
      width: '250px',
      data: { type: this.number, name: name }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  // if (this.eventEmitterService.subsVar == undefined) {
  //   this.eventEmitterService.subsVar = this.eventEmitterService.invokeFirstComponentFunction.subscribe(
  //     value => {

  ngAfterContentChecked() {
    if (this.value) {

      if (this.value === 1) {
        this.number = 2;

        // this.teacher = !this.teacher;
      } else if (this.value === 2) {
        this.number = 1;
        // this.student = !this.student;
      } else if (this.value == 3) {
        this.number = 3;
        // this.course = !this.course;
      }
    }
  }

  findset = event => {
    this.admin
      .adminsearch(this.search1, this.search2, this.number)
      .subscribe(data => {
        console.log(data);
      });
  };
  onChange = event => {
    [event.target.name] = event.target.value;
  };
}
@Component({
  selector: 'app-modeladmin',
  templateUrl: './modeladmin.component.html',

})

class ModeladminComponent {
  add = 1;
  constructor(public dialogRef: MatDialogRef<ModeladminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(data);
    this.add = data.type
  }
  name: "";
  email: "";
  password: "";
  dept: "";

  onNoClick(): void {
    this.dialogRef.close();
  }
}
