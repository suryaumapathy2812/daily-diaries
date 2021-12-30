import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';


const modules = {
  toolbar: [
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    ['bold', 'italic', 'underline'],        // toggled buttons
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  ]
};

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styles: [
  ]
})
export class AddTaskComponent implements OnInit {

  form!: FormGroup;
  quillModules: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: AppService,
    private routes: Router
  ) { }

  ngOnInit(): void {
    this.quillModules = modules;
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
