import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo';
import { faX ,faPencil} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
 faX=faX;
 fapencil=faPencil
  @Input()  todo!: Todo; 
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter()
  @Output() todoEdit: EventEmitter<Todo> = new EventEmitter()
 
  constructor() { }
ngOnInit(): void {
  
}
onClick(todo:Todo){
  this.todoDelete.emit(todo);
console.log(todo);
}
onCheckboxClick(todo:Todo){
  this.todoCheckbox.emit(todo);
}
onEditClick(todo:Todo){
this.todoEdit.emit(todo);
}

}
