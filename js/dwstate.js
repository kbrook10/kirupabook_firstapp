var destination = document.getElementById('container')

class LightningCounterDisplay extends React.Component {
    render() {
        var divStyle = {
            width: 250,
            textAlign: 'center',
            backgroundColor: 'black',
            padding: 40,
            fontFamily: 'sans-serif',
            color: '#999',
            borderRadius: 10
        }
        return(
            <div style={divStyle}>
                <LightningCounter />
            </div>
        )
    }
}

class LightningCounter extends React.Component {
    render() {
        return(
            <h1>Hello!</h1>
        )
    }
}

ReactDOM.render(
    <div>
        <LightningCounterDisplay />
    </div>,
    destination
)
