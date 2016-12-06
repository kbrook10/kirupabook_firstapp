var destination = document.getElementById('container');
var { Router, Route, IndexRoute, IndexLink, Link} = ReactRouter;

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }
    render() {
        return(
            <div className='todoListMain'>
                <div className='header'>
                    <form>
                        <input placeholder='enter task'>
                        </input>
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
