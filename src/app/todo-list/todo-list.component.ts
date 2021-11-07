import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private http: HttpClient) { }
  list: any[] = [];
  ngOnInit(): void {
    this.http.get('http://127.0.0.1:3000/tasks?email=aliasadi@gmail.com&name=MoHAmmad').subscribe((res: any) => {
      this.list = res;
    })
  }

  save() {
    this.http.post("http://127.0.0.1:3000/tasks", {
      "Name": "ali asadi",
      "Age": 29,
      "Email": "aliasadi@gmail.com"
    }).subscribe(res => {
      console.log(res);
    })
  }

}
