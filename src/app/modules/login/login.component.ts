import { Component, OnInit } from "@angular/core";
import { CoursefetchService } from "src/app/service/coursefetch.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
declare var require: any
const set = require("../../../assets/img/icon.png")

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  choice = 1;
  user = {
    email: "",
    password: "",
    role: 1
  };

  logo: string;
  constructor(
    private login: CoursefetchService,
    http: HttpClient,
    private router: Router
  ) {
    this.logo = set;
  }

  ngOnInit(): void { }
  logon(event: Event) {
    if (this.user.email === "admin" && this.user.password === "khan") {
      localStorage.setItem("admin", "xxxxx");
      localStorage.setItem("role", "3");
      this.router.navigate(["/"]);
    } else if (this.choice === 1) {
      this.login.checkuser(this.user).subscribe(data => {
        console.log(data["success"]);
        if (data["success"] === true) {
          localStorage.setItem("user", data["token"]);
          this.router.navigate(["/"]);
        } else if (data["success"] === false) {
          alert("invalid credentials");
        }
      });
    } else if (this.choice === 2) {
      this.user["role"] = 2;
      this.login.checkuser(this.user).subscribe(data => {
        console.log(data["success"]);
        if (data["success"] === true) {
          localStorage.setItem("user", data["token"]);
          this.router.navigate(["/"]);
        } else if (data["success"] === false) {
          alert("invalid credentials");
        }
      });
    }
  }
  onChange = event => {
    this.user[event.target.name] = event.target.value;
  };
}
