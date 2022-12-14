import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ITask} from "../../settings/interfaces/itask";
import {ApiService} from "../../settings/services/api.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrls: ['./new-tasks.component.scss']
})
export class NewTasksComponent implements OnInit {

  public form!: FormGroup;
  public sentFormaValue!: ITask | null;
  public flag: boolean;

  constructor(
    private formBuild: FormBuilder,
    private apiServ: ApiService,
    private toastr: ToastrService
  )
  {
    this.flag = false;
  }

  ngOnInit(): void {
    this.form = this.formBuild.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      task: ['', Validators.required],
      norma: ['', Validators.required],
    })
  }

  submit() {
    if (this.form.invalid) return;
    const obj: ITask = {
      name: this.form.value.name,
      category: this.form.value.category,
      task: this.form.value.task,
      norma: this.form.value.norma,
      date: new Date(),
      complite: false,
    };

    this.sentFormaValue = obj;
    this.flag = true;
  }
  showSuccess() {
    this.toastr.success('Успешно добавлен!', 'Новый наряд');
  }

  showerror() {
    this.toastr.error('Ошибка!', 'не получилось добавить!');
  }
  clear() {
    this.sentFormaValue = null;
    this.flag = false;
  }

  create() {
    const obj: ITask = {
      name: this.form.value.name,
      category: this.form.value.category,
      task: this.form.value.task,
      norma: this.form.value.norma,
      date: new Date(),
      complite: false,
    };
    this.apiServ.addTask(obj)
      .subscribe({
        next: (res) => {
          // console.log(res);
          this.showSuccess();
        },
        error: (er) => {
          console.log(er)
          this.showerror();
        }
      })
    this.form.reset();
    window.print();
    this.sentFormaValue = null;
    this.flag = false;
  }

}
