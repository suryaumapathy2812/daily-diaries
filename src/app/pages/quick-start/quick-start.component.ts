import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styles: [
  ]
})
export class QuickStartComponent implements OnInit {

  form!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      mockUrl: new FormControl(null, Validators.required)
    })
  }

  submitHandler() {
    const { value, invalid } = this.form;
    if (invalid) {
      this.toastr.error("Unable to login", "Oops!", {
        tapToDismiss: true,
        progressBar: true,
        // positionClass: "toast-top-center"
      });
      return;
    }
    this.appService.setLs("name", value.name);
    this.appService.setLs("mockUrl", value.mockUrl)
    this.router.navigateByUrl("/task/list");
  }

}
