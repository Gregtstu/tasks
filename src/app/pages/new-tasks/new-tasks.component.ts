import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ITask} from "../../settings/interfaces/itask";
import {ApiService} from "../../settings/services/api.service";

@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrls: ['./new-tasks.component.scss']
})
export class NewTasksComponent implements OnInit {

  public form!: FormGroup;
  public sentFormaValue!:ITask;
  public flag:boolean;

  constructor(private formBuild:FormBuilder, private apiServ:ApiService) {
    this.flag= false;
  }

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
    if(this.form.invalid) return;
    const obj:ITask = {
      firstFormGroup:{
        name: this.form.value.firstFormGroup.name,
        category:this.form.value.firstFormGroup.category,
      },
      secondFormGroup:{
        task:this.form.value.secondFormGroup.task,
        norma:this.form.value.secondFormGroup.norma,
      },
      date: new Date(),
      complite:false,
    };

     this.sentFormaValue = obj;
  }

  createTask(task: ITask) {
    this.apiServ.addTask(task)
      .subscribe({
        next:(res) => {
          console.log(res);
        },
        error: (er) => {
          console.log(er)
        }
      })
    this.form.reset();
  }
}
