import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  loggingStatus: number = 0;
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onLogin() {
    this.loggingStatus = 1;
    this.authService.login();
  }
  onLogout() {
    this.loggingStatus = 2;
    this.authService.logout();
  }
}
