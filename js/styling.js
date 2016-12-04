var destination = document.getElementById('container')

class Letter extends React.Component {
    render() {
    var letterStyle = {
        padding: 10,
        margin: 10,
        backgroundColor: this.props.bgcolor,
        color: '#333',
        display: 'inline-block',
        fontFamily: 'monospace',
        fontSize: 32,
        textAlign: 'center',
    }
        return(
            <div style={letterStyle}>
                {this.props.children}
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Letter bgcolor="#58b3ff">A</Letter>
        <Letter bgcolor="#ff605f">E</Letter>
        <Letter bgcolor="#ffd52e">I</Letter>
        <Letter bgcolor="#49dd8e">O</Letter>
        <Letter bgcolor="#ae99ff">U</Letter>
    </div>,
    destination
)
