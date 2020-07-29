import { Component, OnInit } from "@angular/core";
import { CoursefetchService } from "../../service/coursefetch.service";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { EventEmitterService } from "../../event-emitter.service";
import { EventEmitter } from "events";
declare var require: any
var jwtDecode = require('jwt-decode');
const set = require("../../../assets/img/icon.png")
const search = require("../../../assets/img/search-24px.svg")
const right = require("../../../assets/img/keyboard_arrow_right-24px.svg")
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  choice = 2;
  search;
  ifsearch = false;
  arraysearched = [];
  Subject = [];
  Courses = [];
  hello = false;
  name = "";
  role = "";
  value = false;
  imageSrc = "";
  imageSearch = "";
  imgRight = "";
  // imageSrc = require("../../../assets/img/icon.png");

  constructor(
    private course: CoursefetchService,
    private eventEmitterService: EventEmitterService
  ) {
    this.imageSearch = search
    this.imgRight = right;
    this.imageSrc = set;
  }

  ngOnInit(): void {
    this.course.Coursefetch().subscribe(data => {
      console.log(data);
      this.getRefined(data["result"]);
    });
    if (this.search === "") {
      this.ifsearch = false;
    }
    if (localStorage.getItem("user")) {
      console.log(localStorage.getItem("user"));
      this.course.getuser().subscribe(data => {
        console.log(data["result"].name);
        var decoded = jwtDecode(localStorage.getItem("user"));
        console.log(decoded);
        console.log(decoded.role);
        this.role = decoded.role;
        this.name = data["result"].name;
        this.choice = 0;
      });
    } else if (localStorage.getItem("admin")) {
      this.choice = 1;
    }
  }
  searchterm(event: Event) {
    this.course.coursesearch(this.search).subscribe(data => {
      console.log(data);
      if (data["success"] === true) {
        console.log(data["result"].rows);
        this.arraysearched = data["result"].rows;
        console.log(this.arraysearched);
        this.ifsearch = !this.ifsearch;
      }
    });
  }
  Logout = (event: Event) => {
    this.choice = 2;
    localStorage.removeItem("admin");
    localStorage.removeItem("user");
    localStorage.removeItem("user");
    // localStorage.removeItem("role");
    this.eventEmitterService.onlogout();
  };

  getRefined = table => {
    let Courses = [],
      Subject = [],
      obb = {};

    table.forEach(element => {
      if (!Courses.includes(element.courseheader))
        Courses.push(element.courseheader);
      obb = Subject[Courses.indexOf(element.courseheader)];
      if (obb)
        obb["list"].push({ name: element.coursename, id: element.courseid });
      else obb = { list: [{ name: element.coursename, id: element.courseid }] };
      Subject[Courses.indexOf(element.courseheader)] = obb;
    });
    this.Subject = Subject;
    this.Courses = Courses;
    console.log(Subject);
  };
  display(event: Event) {
    this.hello = !this.hello;
  }
  navFunction(event: Event) {
    this.eventEmitterService.Onnavbtnclick();
  }
}
