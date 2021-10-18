import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { rejects } from "assert";
import { resolve } from "dns";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signUpForm: FormGroup;
  forbiddenUsernames: string[] = ["AAA", "BBB", "CCC"];

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          [this.forbiddenEmails]
        ),
      }),
      gender: new FormControl("male", Validators.required),
      hobbies: new FormArray([]),
      phoneNumbers: new FormArray([]),
    });

    this.signUpForm.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.signUpForm.statusChanges.subscribe((status) => {
      console.log(status);
    });

    // this.signUpForm.setValue({}); To set all value
    // this.signUpForm.patchValue({}); To set specific value in form
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signUpForm.get("hobbies") as FormArray).push(control);
  }

  onAddPhoneNumber() {
    const control = new FormControl(null, Validators.required);
    (this.signUpForm.get("phoneNumbers") as FormArray).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    return this.forbiddenUsernames.indexOf(control.value) !== -1
      ? { nameIsForbidden: true }
      : null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 5000);
    });
  }
}
