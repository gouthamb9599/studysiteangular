import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { HomepageComponent } from "./modules/homepage/homepage.component";
import { NavbarComponent } from "./modules/navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SignupComponent } from "./modules/signup/signup.component";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material/material.module";
import { LoginComponent } from "./modules/login/login.component";
import { SidebarComponent } from "./modules/sidebar/sidebar.component";
import { MatDialogModule } from "@angular/material/dialog";
import { EventEmitterService } from "./event-emitter.service";
import { AdminviewComponent } from "./modules/adminview/adminview.component";


@NgModule({
  declarations: [
    AppComponent,

    HomepageComponent,

    NavbarComponent,

    SignupComponent,

    LoginComponent,

    SidebarComponent,

    AdminviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatDialogModule,
    NgApexchartsModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
