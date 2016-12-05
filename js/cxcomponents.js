var destination = document.getElementById('container')

class Card extends React.Component {
    render() {
        var cardStyle = {
            height: 200,
            width: 150,
            padding: 0,
            backgroundColor: '#fff',
            WebkitFilter: 'drop-shadow(0px 0px 5px #666)',
            filter: 'drop-shadow(0px 0px 5px #666)',
        }
        return(
            <div style={cardStyle}>
                <Square color={this.props.color}/>
                <Label color={this.props.color}/>
            </div>
        )
    }
}
class Square extends React.Component {
    render() {
        var squareStyle = {
            height: '75%',
            backgroundColor: this.props.color,
        }
        return(
            <div style={squareStyle}>

            </div>
        )
    }
}
class Label extends React.Component {
    render() {
        var labelStyle = {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            padding: 20,
            margin: 0,
            textAlign: 'center'
        }
        return(
            <p style={labelStyle}>{this.props.color}</p>
        )
    }
}



ReactDOM.render(
    <div>
        {/* <Card color="#FF6663"/> */}
        <Card color="#FFA737"/>
    </div>,
    destination
)
