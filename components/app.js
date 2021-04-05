(function () {
	const template = `
	<div id="app">
	    <section class="todoapp">
		    <todo-header @addTodo="addTodo"></todo-header>
		    <todo-list :todos="todos"
			:mode="mode"
			@destroy-todo="destroyTodo">
			</todo-list>
			<todo-footer :mode="mode"></todo-footer>
	    </section>
		<app-footer></app-footer>
	</div>
	`

	window.App = {
		template,
		data: function () {
			return {
				todos: [
					{
						id: 1,
						title: '吃饭',
						completed: false
					},
					{
						id: 2,
						title: '睡觉',
						completed: true
					},
					{
						id: 3,
						title: '打游戏',
						completed: false
					}
				],
				mode: 'active'
			}
		},
		created() {
			window.onhashchange = () => {
				const hash = window.location.hash.substr(2)
				if (!hash.length)
					this.mode = 'all'
				else
					this.mode = hash
			}
		},
		methods: {
			destroyTodo(id) {
				const todos = this.todos
				todos.forEach((item, index) => {
					if (item.id === id) {
						todos.splice(index, 1)
					}
				})
			},
			addTodo(titleText) {
				this.todos.push({
					id: this.todos[this.todos.length - 1].id + 1 || 1,
					title: titleText,
					completed: false
				})
			}
		},
		components: {
			TodoHeader,
			TodoList,
			TodoFooter,
			AppFooter
		}
	}
})()