var destination = document.getElementById('container')

class Circle extends React.Component {
    render() {
        var circleStyle = {
            padding: 10,
            margin: 20,
            display: 'inline-block',
            backgroundColor: this.props.bgColor,
            borderRadius: '50%',
            width: 100,
            height: 100,
        }
        return(
            <div style={circleStyle}>
            </div>
        )
    }
}
function showCircle() {
    var colors = [
        '#393e41',
        '#e94f37',
        '#1c89bf',
        '#a1d363',
    ];
    var random = Math.floor(Math.random() * colors.length);
    return <Circle bgColor={colors[random]} />
}

ReactDOM.render(
    <div>
        {showCircle()}
    </div>,
    destination
)
