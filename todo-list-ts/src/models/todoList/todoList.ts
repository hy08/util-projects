import { Subscription, Reducer, Effect } from 'umi';
import { getTodoList } from '@/services/todoList';

export interface TodoItem {
  id: string;
  content: string;
  done: boolean;
}
export interface TodoListModelState {
  todoList: TodoItem[];
}
interface TodoListModelType {
  namespace: 'todoList';
  state: TodoListModelState;
  effects: {
    initTodoList: Effect;
  };
  reducers: {
    _saveTodoList: Reducer<TodoListModelState>;
    _createTodoItem: Reducer<TodoListModelState>;
    _deleteTodoItem: Reducer<TodoListModelState>;
    _changeTodoItemStatus: Reducer<TodoListModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const TodoListModel: TodoListModelType = {
  namespace: 'todoList',
  state: {
    todoList: [],
  },
  subscriptions: {
    setup({ dispatch, history }): void {},
  },
  effects: {
    *initTodoList({}, { put, call }) {
      const data = yield call(getTodoList);
      if (data.error) {
        return;
      }
      yield put({ type: '_saveTodoList', payload: data });
    },
  },
  reducers: {
    _saveTodoList(state, { payload }): TodoListModelState {
      return { ...state, todoList: payload };
    },
    _createTodoItem(state = { todoList: [] }, { todoItem }): TodoListModelState {
      const { todoList } = state;
      let exitedTodo = todoList.find(
        (todo) => todo.id !== todoItem.id && todo.content !== todoItem.content,
      );
      if (exitedTodo) {
        todoList.push(todoItem);
        return { ...state, todoList: [...todoList] };
      } else {
        return { ...state };
      }
    },
    _deleteTodoItem(state = { todoList: [] }, { id }): TodoListModelState {
      const todoList = state.todoList.filter((todo) => todo.id !== id);
      return { ...state, todoList };
    },
    _changeTodoItemStatus(state = { todoList: [] }, { id }): TodoListModelState {
      const { todoList } = state;
      let todo = todoList.find((todo) => todo.id === id);
      if (todo) {
        todo.done = !todo.done;
      }
      return { ...state, todoList: [...todoList] };
    },
  },
};

export default TodoListModel;
