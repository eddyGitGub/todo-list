import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../service/todolist.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
 todos: Todo[]=[];
  constructor(private todoService: TodolistService) {
   
  }
  ngOnInit(): void {
    this.todoService.getAll().subscribe((res:Todo[])=> {
      console.log('list', res);
      this.todos = res
    })
    
  }

}
