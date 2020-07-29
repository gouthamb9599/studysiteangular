import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { StudentfetchService } from "../../service/studentfetch.service";

import { EventEmitterService } from "../../event-emitter.service";
import { Event } from "@angular/router";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
declare var require: any
const set = require("../../../assets/img/teacher.svg");
const stud = require("../../../assets/img/student.svg");
const pencil = require("../../../assets/img/pencil.svg");
const undo = require('../../../assets/img/undo-button.svg');
const courses = require('../../../assets/img/award-solid.svg');
const changes = require('../../../assets/img/change.svg');
const reset = require('../../../assets/img/undo.svg');
var jwtDecode = require('jwt-decode');

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  user = 3;
  adminbtnclick = 1;
  value: boolean = false;
  eventEmmiterService: any;
  studentdetail = [];
  studentmark = [];
  basemark = [];
  mark = [];
  opendis1 = false;
  opendis2 = false;
  role = 0;
  change = true;
  editarray = [];
  val;
  openchart = false;
  teacher = "";
  stu = "";
  edit = "";
  course = "";
  undo = "";
  changes = "";
  reset = "";

  constructor(
    private student: StudentfetchService,
    private eventEmitterService: EventEmitterService
  ) {
    this.teacher = set;
    this.stu = stud;
    this.edit = pencil;
    this.undo = undo;
    this.course = courses;
    this.changes = changes;
    this.reset = reset;
  }
  ngOnInit(): void {
    if (localStorage.getItem("user")) {
      var decoded = jwtDecode(localStorage.getItem("user"));
      console.log(decoded);
      console.log(decoded.role);
      this.role = decoded.role;
    }
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeFirstComponentFunction.subscribe(
        (name: string) => {
          this.togglefn();
        }
      );
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeLogout.subscribe(
        (name: string) => {
          this.togglefn();
        }
      );
    }
  }
  oncurrentstatus(event: Event) {
    this.openchart = !this.openchart;
    var xaxis = [];
    var yaxis = [];
    this.studentmark.forEach(function (value) {
      xaxis.push(value.name);
      yaxis.push(value.marks);
    });
    console.log(yaxis);
    console.log(xaxis);

    this.chartOptions = {
      series: [
        {
          name: "subject1",
          data: yaxis
        }
      ],
      chart: {
        width: 500,
        height: 200,
        type: "line"
      },
      title: {
        text: "marks of student for subject1",
        align: "center"
      },

      xaxis: {
        categories: xaxis
      }
    };
    console.log(this.chartOptions, this.openchart);
  }
  togglefn() {
    var decoded = jwtDecode(localStorage.getItem("user"));
    console.log(decoded);
    console.log(decoded.role);
    var role = decoded.role;
    if (role) {
      if (role == 1) {
        this.user = 1;
      } else if (role === 2) {
        this.user = 2;
      } else {
        this.user = 3;
      }
    } else {
      this.user = 4;
      this.opendis1 = false;
      this.opendis2 = false;
      this.change = true;
    }
    this.value = !this.value;
  }
  studentdetails = (event: Event) => {
    var decoded = jwtDecode(localStorage.getItem("user"));
    console.log(decoded);
    console.log(decoded.role);
    var data = {
      token: localStorage.getItem("user"),
      role: decoded.role
    };
    this.student.studentdetails(data).subscribe(datas => {
      if (datas["success"] === true) {
        this.studentdetail = datas["result"];
        // console.log(this.studentdetail);
        this.opendis1 = !this.opendis1;
      }
    });
  };
  adminview(event: Event, value) {

    this.val = value;
  }
  coursedetails = (event: Event) => {
    var decoded = jwtDecode(localStorage.getItem("user"));
    console.log(decoded);
    console.log(decoded.role);
    var data = {
      token: localStorage.getItem("user"),
      role: decoded.role
    };
    this.student.coursedetails(data).subscribe(Data => {
      this.studentdetail = Data["result"];
      this.opendis1 = !this.opendis1;
    });
  };
  studentmarks = (event: Event) => {
    var decoded = jwtDecode(localStorage.getItem("user"));
    console.log(decoded);
    console.log(decoded.role);
    var data = {
      token: localStorage.getItem("user"),
      role: decoded.role
    };
    this.student.studentmarks(data).subscribe(Data => {
      this.studentmark = Data["result"];
      // console.log(this.studentmark);
      this.opendis2 = !this.opendis2;
      this.markcall(this.studentmark);
    });
  };

  viewmarks = (event: Event) => {
    var data = {
      token: localStorage.getItem("user"),
      role: this.role
    };
    this.student.viewmarks(data).subscribe(Data => {
      this.studentmark = Data["result"];
      this.opendis2 = !this.opendis2;
    });
  };

  markcall = data => {
    // console.log(data);
    data.forEach(element => {
      this.mark.push(element.marks);
      this.basemark.push(element.marks);
      // this.oncurrentstatus();
      // console.log(this.mark, this.basemark);
    });
  };
  editmark(event: Event, index) {
    this.change = false;
    this.editarray.push(index);
  }
  undoedit(event: Event, index) {
    this.change = true;
    this.editarray.splice(this.editarray.indexOf(index), 1);
  }
  changemark(event: Event, index) {
    console.log(this.mark[index]);
    console.log(this.studentmark[index]);
    this.student
      .editmarks(this.mark[index], this.studentmark[index])
      .subscribe(datas => {
        console.log(datas);
        this.studentmark[index].marks = this.mark[index];
        this.editarray.splice(this.editarray.indexOf(index), 1);
      });
    this.change = !this.change;
    this.updateSeries(this.mark);
  }
  updateSeries(mark) {
    this.chartOptions.series = [
      {
        data: mark
      }
    ];
  }
  binddata(event: any, index) {
    this.mark[index] = event.target.value;
    console.log(this.mark[index]);
  }
  revokechange(event: Event, index) {
    this.mark[index] = this.basemark[index];
    this.student
      .undoedit(this.basemark[index], this.studentmark[index])
      .subscribe(datas => {
        this.editarray.splice(this.editarray.indexOf(index), 1);
      });

    this.updateSeries(this.basemark);
  }
}
