import { Injectable, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs/internal/Subscription";

@Injectable({
  providedIn: "root"
})
export class EventEmitterService {
  invokeFirstComponentFunction = new EventEmitter();
  invokeLogout = new EventEmitter();
  subsVar: Subscription;

  constructor() {}
  Onnavbtnclick() {
    this.invokeFirstComponentFunction.emit();
  }
  onlogout() {
    this.invokeLogout.emit();
  }
  // onteacher(value) {
  //   console.log(value);
  //   this.invokeFirstComponentFunction.emit({ value: value });
  // }
}
