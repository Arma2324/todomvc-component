~(function () {
    const template = `
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
		<input id="toggle-all" class="toggle-all" type="checkbox">
		<label for="toggle-all">Mark all as complete</label>
		<ul class="todo-list">
			<!-- These are here just to show the structure of the list items -->
			<!-- List items should get the class editing when editing and ompleted when marked as completed -->
			<li :class="{completed: item.completed}"
			v-for="item, index in filterTodos">
				<div class="view">
					<input class="toggle" type="checkbox" v-model="item.completed">
					<label>{{ item.title }}</label>
					<button class="destroy" @click="$emit('destroy-todo', item.id)"></button>
				</div>
				<input class="edit" value="Create a TodoMVC template">
			</li>
		</ul>
	</section>
    `
    window.TodoList = {
		template,
		props: ['todos', 'mode'],
		data: function () {
			return {
			}
		},
		computed: {
			filterTodos() {
				switch (this.mode) {
					case 'active':
						return this.todos.filter(item => !item.completed)
					case 'completed':
						return this.todos.filter(item => item.completed)
					default:
						return this.todos
				}

			}
		}
    }
})()