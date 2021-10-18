import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signUpForm: NgForm;
  submitted = false;
  answer: string = "";
  genders = ["male", "female"];

  user = {
    username: "",
    email: "",
    gender: "",
    secretQuestion: "",
    answer: "",
  };

  suggestUserName() {
    const suggestedName = "Superuser";
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "",
    //   },
    //   gender: "male",
    //   secret: "teacher",
    //   questionAnswer: "",
    // });

    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });

    // setValue => To override entire form value
    // patchValue => TO override specific value in form
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.gender = this.signUpForm.value.gender;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.submitted = true;

    // Reset form after submit
    this.signUpForm.reset();
  }
}
