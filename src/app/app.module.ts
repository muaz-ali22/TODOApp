import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { TodoItemsComponent } from './MyComponent/todo-items/todo-items.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideTextComponent } from './MyComponent/side-text/side-text.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { ClearTodoComponent } from './MyComponent/clear-todo/clear-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemsComponent,
    SideTextComponent,
    AddTodoComponent,
    ClearTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
