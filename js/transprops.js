var destination = document.getElementById('container')

class Shirt extends React.Component {

    render() {

        return(
            <div>
                <Label {...this.props}/>
            </div>
        )
    }
}
class Label extends React.Component {
    render() {
        return(
        <div>
            <Display {...this.props}/>
        </div>
        )
    }
}
class Display extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.color}</p>
                <p>{this.props.num}</p>
                <p>{this.props.size}</p>
            </div>
        )
    }
}
ReactDOM.render(
    <div>
        <Shirt color="steelblue" num="3.14" size="medium" />
    </div>,
    destination
)
