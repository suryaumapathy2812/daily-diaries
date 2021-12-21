import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styles: [
  ]
})
export class AddTaskComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AppService,
    private routes: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      task: new FormControl(null, Validators.required),
      name: "Surya",
      createdAt: new Date().toISOString(),
    })
  }

  submitHandler() {
    // e?.preventDefault();

    console.log(this.form.value)
    if (this.form.invalid) {
      return;
    }
    this.service.setTask(this.form.value).subscribe(res => {
      console.log(res)
      this.routes.navigateByUrl("/task/list");
    })
  }

}
