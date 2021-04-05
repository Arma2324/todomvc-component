~(function () {
    const template = `
    <!-- This footer should be hidden by default and shown when there are todos -->
	<footer class="footer">
		<!-- This should be 0 items left by default -->
		<span class="todo-count"><strong>0</strong> item left</span>
		<!-- Remove this if you don't implement routing -->
		<ul class="filters">
			<li>
				<a :class="{selected: mode === 'all'}" href="#/">All</a>
			</li>
			<li>
				<a :class="{selected: mode === 'active'}" href="#/active">Active</a>
			</li>
			<li>
				<a :class="{selected: mode === 'completed'}" href="#/completed">Completed</a>
			</li>
		</ul>
		<!-- Hidden if no completed items are left ↓ -->
		<button class="clear-completed">Clear completed</button>
	</footer>
    `
    window.TodoFooter = {
		template,
		props: ['mode']
    }
})()