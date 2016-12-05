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
//<--This function loops through the array of colors and then randomly selects a color to input into the JSX tag 'Circle' via the property bgColor via '{colors[random]}'-->

// function showCircle() {
//     var colors = [
//         '#393e41',
//         '#e94f37',
//         '#1c89bf',
//         '#a1d363',
//     ];
//     var random = Math.floor(Math.random() * colors.length);
//     return <Circle bgColor={colors[random]} />
// }

//<--This example takes the 'colors' array and uses the empty 'renderData' array to push a separate instance of the JSX tag Circle for the amount of cirles listed in the 'colors' array-->
var colors = [
        '#393e41',
        '#e94f37',
        '#1c89bf',
        '#a1d363',
        '#85ffc7',
        '#297373',
        '#ff8552',
        '#a40e4c', ];
var renderData = [];
for (var i=0; i < colors.length; i++) {
    var color = colors[i]
    renderData.push(<Circle bgColor={color} key={i + color}/>)
}


ReactDOM.render(
    <div>
        {/* {showCircle()} */}
        {renderData}
    </div>,
    destination
)
