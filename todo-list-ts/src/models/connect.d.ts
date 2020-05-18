import { DemoModelState } from './demo';
import { TodoListModelState } from './todoList/todoList';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    demo?: boolean;
    todo?: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
  demo: DemoModelState;
  todoList: TodoListModelState;
}
