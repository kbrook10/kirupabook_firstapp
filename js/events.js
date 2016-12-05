var destination = document.getElementById('container')

class CounterParent extends React.Component {
    constructor(props) {
        super(props)
        this.increase = this.increase.bind(this)
        this.state = {
            count: 0,
        }
    }
    increase(event) {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        var backgroundStyle = {
            padding: 50,
            backgroundColor: '#ffc53a',
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: 'center'
        };
        var buttonStyle = {
            fontSize: '1em',
            width: 30,
            height: 30,
            fontFamily: 'sans-serif',
            color: '#333',
            fontWeight: 'bold',
            lineHeight: '3px'
        }
        return(
            <div style={backgroundStyle}>
                <Counter display={this.state.count} />
                <button onClick={this.increase} style={buttonStyle}>+</button>
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
