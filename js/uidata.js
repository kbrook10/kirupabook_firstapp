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

ReactDOM.render(
    <div>
        <Circle bgColor='#f9c240' />
    </div>,
    destination
)
