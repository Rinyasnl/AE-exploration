// store.js
import { EventEmitter } from 'events';
import dispatcher from './dispatcher';
import { ActionTypes } from './actions';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [];
    }

    getAll() {
        return this.todos;
    }

    handleActions(action) {
        switch (action.type) {
            case ActionTypes.ADD_TODO:
                this.todos.push({
                    id: Date.now(),
                    text: action.payload,
                });
                this.emit('change');
                break;
            case ActionTypes.REMOVE_TODO:
                this.todos = this.todos.filter(todo => todo.id !== action.payload);
                this.emit('change');
                break;
            default:
            // Do nothing
        }
    }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
