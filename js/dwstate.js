var destination = document.getElementById('container')

class LightningCounterDisplay extends React.Component {
    render() {
        var commonStyle = {
            margin: 0,
            padding: 0,
        }
        var divStyle = {
            width: 250,
            textAlign: 'center',
            backgroundColor: '#020202',
            padding: 40,
            fontFamily: 'sans-serif',
            color: '#999',
            borderRadius: 10
        }
        var textStyle = {
            emphasis: {
                fontSize: 38, ...commonStyle
            },
            smallEmphasis: {
                ...commonStyle
            },
            small: {
                fontSize: 17,
                opacity: 0.5,
                ...commonStyle
            }
        }
        return(
            <div style={divStyle}>
                <LightningCounter />
                <h2 style={textStyle.smallEmphasis}>LIGHTNING STRIKES</h2>
                <h2 style={textStyle.emphasis}>WORLDWIDE</h2>
                <p style={textStyle.small}>(since you loaded this example)</p>
            </div>
        )
    }
}

class LightningCounter extends React.Component {
    constructor(props) {
        super(props)
        this.timerTick = this.timerTick.bind(this)
        this.state = {
            strikes: 0,
        }
    }
    componentDidMount() {
        // setInterval(this.timerTick, 1000);
    }
    timerTick() {
        this.setState(
            {strikes: this.state.strikes + 100}
        )
    }
    render() {
        var counterStyle = {
            color: '#66ffff',
            fontSize: 50
        }
        var count = this.state.strikes.toLocaleString();
        return(
            <h1 style={counterStyle}>{count}</h1>
        )
    }
}

ReactDOM.render(
    <div>
        <LightningCounterDisplay />
    </div>,
    destination
)
