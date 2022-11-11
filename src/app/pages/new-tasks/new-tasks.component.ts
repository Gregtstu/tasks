import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrls: ['./new-tasks.component.scss']
})
export class NewTasksComponent implements OnInit {
  public form!: FormGroup;
  constructor(private formBuild:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuild.group({
      firstFormGroup:this.formBuild.group({
        name:['', Validators.required],
        category:['', Validators.required],
      }),
      secondFormGroup:this.formBuild.group({
        task:['', Validators.required],
        norma:['', Validators.required],
      }),
    })
  }

  submit() {
    console.log(this.form.value)
  }
}
