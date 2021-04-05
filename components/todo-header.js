~(function () {
    const template = `
    <header class="header">
		<h1>todos</h1>
		<input class="new-todo"
        @keyup.enter="emitTitleText"
        placeholder="What needs to be done?">
	</header>
    `
    window.TodoHeader = {
        template,
        methods: {
            emitTitleText(e) {
                let titleText = e.target.value.trim()
                if (!titleText.length) return
                this.$emit('addTodo', titleText)
                e.target.value = ''
            }
        }
    }
})()