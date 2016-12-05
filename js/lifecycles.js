var destination = document.getElementById('container')

class CounterParent extends React.Component {
    constructor(props) {
        super(props)
        this.increase = this.increase.bind(this)
        this.state = ()=>{
            console.log('getInitialState: Default state time!');
            count: 0
        }
        this.props
    }
    // getInitialState() {
    //     return {
    //         count: 0
    //     }
    // }
    getDefaultProps() {
        console.log('getDefaultProps: Default prop time!')
        return {};
    }
    increase() {
        this.setState({
            count: this.state.count + 1
        })
    }
    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate: Component is about to update!')
    }
    componentDidUpdate(currentProps, currentState) {
        console.log('componentDidUpdate: Component just updated!')
    }
    componentWillMount() {
        console.log('componentWillMount: Component is about to mount!')
    }
    componentDidMount() {
        console.log('componentDidMount: Component just mounted!')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount: Component is about to be removed from the DOM!')
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate: Should component update?')
        if (newState.count < 5) {
            console.log('shouldComponentUpdate: Component should update!');
            return true
        } else {
            ReactDOM.unmountComponentAtNode(destination);
            console.log('shouldComponentUpdate: Component should not update!');
            return false;
        }
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps: Component will get new props!');
    }
    render() {
        var backgroundStyle = {
            padding: 50,
            border: '#333 2px dotted',
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: 'center'
        }
        return(
            <div style={backgroundStyle}>
                <Counter display={this.state.count} />
                <button onClick={this.increase}>+</button>
            </div>
        )
    }
}

class Counter extends React.Component {
    render() {
        var textStyle = {
            fontSize: 72,
            fontFamily: 'sans-serif',
            color: '#333',
            fontWeight: 'bold',
        }
        return(
            <div style={textStyle}>
                {this.props.display}
            </div>
        )
    }
}
ReactDOM.render(
    <div>
        <CounterParent />
    </div>,
    destination
)
