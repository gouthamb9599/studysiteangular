import { Component, OnInit } from "@angular/core";
import { TeacherfetchService } from "../../service/teacherfetch.service";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
declare var require: any
const set = require("../../../assets/img/icon.png")

// import { set } from "src/assets/img/icon.png";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  choice = 1;
  course: any;
  user = {
    name: "",
    email: "",
    password: "",
    role: 1,
    subject: ""
  };
  logo: string;

  constructor(
    private teacher: TeacherfetchService,
    http: HttpClient,
    private router: Router
  ) { this.logo = set }

  details: any;

  ngOnInit(): void {
    this.teacher.teacherfetch().subscribe(data => {
      this.details = data["result"];
      console.log(this.details);
    });
  }
  onChange = event => {
    this.user[event.target.name] = event.target.value;
  };

  signup(event: Event) {
    if (this.choice === 1) {
      this.teacher.signup(this.user).subscribe(data => {
        console.log(data["success"]);
        if (data["success"]) {
          localStorage.setItem("user", data["token"]);
          localStorage.setItem("role", data["role"]);
          this.router.navigate(["/"]);
        }
      });
    } else if (this.choice === 2) {
      this.user["role"] === 2;
      this.teacher.signup(this.user).subscribe(data => {
        console.log(data["success"]);
        if (data["success"]) {
          localStorage.setItem("user", data["token"]);
          localStorage.setItem("role", data["role"]);
          this.router.navigate(["/"]);
        }
      });
    }
  }
}
