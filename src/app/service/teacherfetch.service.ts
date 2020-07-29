import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class TeacherfetchService {
  constructor(private http: HttpClient) {}
  teacherfetch = () => {
    return this.http.get("http://localhost:5233/getdetails?isTeacher=false");
  };
  signup = data => {
    console.log(data);
    return this.http.post("http://localhost:5233/signup", {
      name: data.name,
      email: data.email,
      role: data.role.toString(),
      password: data.password,
      subject: data.subject
    });
  };
  adminsearch = (search1, search2, value) => {
    if (value === 1) {
      return this.http.post("http://localhost:5233/getteachersforadmin", {
        name: search1,
        email: search2
      });
    }
    if (value == 2) {
      return this.http.post("http://localhost:5233/getstudentforadmin", {
        name: search1,
        email: search2
      });
    }
    if (value == 3) {
      return this.http.post("http://localhost:5233/getcourseforadmin", {
        coursename: search1,
        department: search2
      });
    }
  };
}
