import { Component, OnInit } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';

// @NgModule({
//   imports: [
//     FormsModule
//   ],
// })

@Component({
  selector: 'app-book-create-form',
  templateUrl: './book-create-form.component.html',
  styleUrls: ['./book-create-form.component.css']
})

export class BookCreateFormComponent implements OnInit {
  public peopleInfo : any = {
    username : 'Kone.wang',
    sex:'1',
    citylist:['安徽','北京','上海','广州'],
    city:'上海',
    hobby:[{
      title:'吃饭',
      checked:false
    },
    {
      title:'睡觉',
      checked:false
    },
    {
      title:'敲代码',
      checked:true
    }],
    mark:'请在这里说明你的5个优点'
  }

  constructor() { }
  doSubmit(){
  /**
   * jquery操作：可用，但不推荐
   * let usernameDom:any=document.getElementById('username');
   * console.log(usrnameDom.value);
   * 推荐下面的利用双向数据绑定获取值
   */
    console.log(this.peopleInfo);
  }
  ngOnInit() {
  }
}

