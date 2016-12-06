var destination = document.getElementById('container');
var { Router, Route, IndexRoute, IndexLink, Link} = ReactRouter;

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
