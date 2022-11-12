import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from "../../settings/services/api.service";
import {ITask} from "../../settings/interfaces/itask";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'task', 'actions'];
  public dataSource: MatTableDataSource<ITask>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private apiServ: ApiService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getAllTasks();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllTasks(): void {
    this.apiServ.getAll()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          // this.dataSource.paginator = this.paginator;
          // this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.log(err);
          this.dataSource = new MatTableDataSource();
        }
      })
  }

  delete(id: string): void {
    this.apiServ.deleteTask(id).subscribe({
        next: (res) => {
          this.getAllTasks();
          console.log(res)
        },
      error: (er) => {
        console.log(er);
      }
      }
    )
  }
}
