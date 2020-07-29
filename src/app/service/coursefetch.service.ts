import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
declare var require: any
var jwtDecode = require('jwt-decode');
@Injectable({
  providedIn: "root"
})
export class CoursefetchService {
  constructor(private http: HttpClient) { }
  Coursefetch = () => {
    return this.http.get("http://localhost:5233/coursed");
  };
  getuser = () => {
    var decoded = jwtDecode(localStorage.getItem("user"));
    console.log(decoded);
    return this.http.get(
      `http://localhost:5233/token?role=${decoded.role}`,
      {
        headers: new HttpHeaders({
          Authorization: localStorage.getItem("user")
        })
      }
    );
  };
  checkuser = data => {
    return this.http.post("http://localhost:5233/login", {
      email: data.email,
      password: data.password,
      role: data.role
    });
  };
  coursesearch = data => {
    console.log(data);
    return this.http.get(`http://localhost:5233/getcourse?search=${data}`);
  };
}
