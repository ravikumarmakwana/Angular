import { rejects } from "assert";
import { resolve } from "dns";

export class AuthService {
  loggedIn: boolean = false;

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.loggedIn), 800);
    });
  }

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
