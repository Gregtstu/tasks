export interface ITask {
  id?:string;
  firstFormGroup:{
    name:string;
    category:string;
  };
  secondFormGroup:{
    task:string;
    norma:string;
  };
  date:Date;
  complite:boolean;
}
