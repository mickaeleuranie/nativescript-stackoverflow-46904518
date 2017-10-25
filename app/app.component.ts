import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public progressValue: number;

  constructor() {
    this.progressValue = 1;
  }

  onProgressLoaded(event) {
    event.object.color = "red";
    event.object.backgroundColor = "blue";
  }
}
