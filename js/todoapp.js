var destination = document.getElementById('container');
var { Router, Route, IndexRoute, IndexLink, Link} = ReactRouter;

class TodoItems extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var todoEntries = {this.props.entries}

        function createTasks(items) {
            return <li key={item.key}>{item.text}</li>
        }
        var listItems = todoEntries.map(createTasks)
        return(
            <ul className='theList'>
                {listItems}
            </ul>
        )
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.addItem = this.addItem.bind(this)
        this.state = {
            items: []
        }
    }
    addItem(event) {
        var itemArray = this.state.items;

        itemArray.push({
            text: this._inputElement.value,
            key: Date.now()
        });
        this.setState({
            items: itemArray
        });
        event.preventDefault();
    }
    render() {
        return(
            <div className='todoListMain'>
                <div className='header'>
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder='enter task'>
                        </input>
                        <button type='submit'>add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
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
