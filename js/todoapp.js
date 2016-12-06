var destination = document.getElementById('container');
var { Router, Route, IndexRoute, IndexLink, Link} = ReactRouter;

class TodoList extends React.Component {
    render() {
        return(
            <div className='todoListMain'>
                <div className='header'>
                    <form>
                        <input placeholder='enter task' />
                        <button type='submit'>add</button>
                    </form>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <TodoList />
    </div>,
    destination
)
