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
        var currentCount = this.state.count;

        if (event.shiftKey) {
            currentCount += 10;
        } else {
            currentCount += 1;
        }

        console.log(event)
        this.setState({
            count: currentCount
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
                {/* <PlusButton clickHandler={this.increase} /> */}
            </div>
        )
    }
}
// class PlusButton extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return(
//             <button onClick={this.clickHandler}>+</button>
//         )
//     }
// }

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
