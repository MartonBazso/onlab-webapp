import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  ControlContainer,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { Role } from "src/app/interfaces/user.interface";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  name: AbstractControl;
  email: AbstractControl;
  passwords: AbstractControl;
  userRole: AbstractControl;
  roles = Role;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.name = this.fb.control("", [
      Validators.required,
      Validators.minLength(5),
    ]);

    this.email = this.fb.control("", [
      Validators.required,
      Validators.minLength(5),
      Validators.email,
    ]);

    this.passwords = this.fb.group(
      {
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: [""],
      },
      { validator: passwordValidator(8) }
    );

    this.userRole = this.fb.control("", [Validators.required]);

    this.form = this.fb.group({
      name: this.name,
      email: this.email,
      passwords: this.passwords,
      userRole: this.userRole,
    });
  }

  register() {
    const user = {
      name: this.name.value,
      email: this.email.value,
      password: this.passwords.get('password').value,
      userRole: this.userRole.value
    };
    this.userService.addUser(user).subscribe(
      (data) => {
        this.router.navigate(['/login']);
      });
  }
}

export function passwordValidator(minLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let pwValidation = validatePwControl(control.get("password"), "password", minLength);
    if (pwValidation) return pwValidation;

    let confirmPwValidation = validatePwControl(control.get("confirmPassword"), "confirmPassword", minLength);
    if (confirmPwValidation) return confirmPwValidation;

    const forbidden = control.get("password").value !== control.get("confirmPassword").value;
    return forbidden ? { passwordNotMatch: true } : null;
  };
}
function validatePwControl(control: AbstractControl, formControlName: string, minLength: number): ValidationErrors {
  if (!control.value) return { [formControlName + "Empty"]: true };
  return control.value.length < minLength ? { [formControlName + "TooShort"]: true } : null;
}
