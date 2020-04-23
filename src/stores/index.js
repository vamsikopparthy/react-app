import UserService from '../Services/index.api'

import CounterStore from './CounterStore'
import UserStore from './UsersStore'

import MobxTodoStore from './mobxTodoStore'

import UserTodoService from '../Services/index.todo.js'

const counterStore = new CounterStore()

const userService = new UserService()

const userTodoService = new UserTodoService()

const mobxTodoStore = new MobxTodoStore(userTodoService);

const usersStore = new UserStore(userService)

export default {
    counterStore,
    mobxTodoStore,
    usersStore,
}