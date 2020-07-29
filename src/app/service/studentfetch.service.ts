import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
declare var require: any
var jwtDecode = require('jwt-decode');
@Injectable({
  providedIn: "root"
})


export class StudentfetchService {
  role: string;
  constructor(private http: HttpClient) {
    var decoded = jwtDecode(localStorage.getItem("user"));
    console.log(decoded);
    this.role = decoded.role;

  }
  studentdetails = data => {
    return this.http.get(
      `http://localhost:5233/getstudent?role=${this.role}`,
      {
        headers: new HttpHeaders({
          Authorization: localStorage.getItem("user")
        })
      }
    );
  };
  coursedetails = data => {
    return this.http.get(
      `http://localhost:5233/getstudent?role=${this.role}`,
      {
        headers: new HttpHeaders({
          Authorization: localStorage.getItem("user")
        })
      }
    );
  };
  studentmarks = data => {
    return this.http.get(
      `http://localhost:5233/marks?isrole=${this.role}`,
      {
        headers: new HttpHeaders({
          Authorization: localStorage.getItem("user")
        })
      }
    );
  };
  viewmarks = data => {
    return this.http.get(
      `http://localhost:5233/marks?isrole=${this.role}`,
      {
        headers: new HttpHeaders({
          Authorization: localStorage.getItem("user")
        })
      }
    );
  };
  editmarks = (mark, data) => {
    console.log(mark, data);
    return this.http.post(`http://localhost:5233/changemark`, {
      mark,
      id: data["studentid"],
      subject: data["subject"]
    });
  };
  undoedit = (mark, data) => {
    console.log(mark, data);
    return this.http.post(`http://localhost:5233/revokechange`, {
      mark,
      id: data["studentid"],
      subject: data["subject"]
    });
  };
}
