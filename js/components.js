var destination = document.getElementById('container')

class HelloWorld extends React.Component{
    render() {
        return (
            <p>Hello, {this.props.greetTarget}!</p>
        )
    }
}
class Buttonify extends React.Component {
    render() {
        return(
            <div>
                <button type={this.props.behavior}>{this.props.children}</button>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        {/* <HelloWorld greetTarget="Batman"/>
        <HelloWorld greetTarget="Iron Man"/>
        <HelloWorld greetTarget="Mega Man"/> */}
        <Buttonify behavior="Submit">SEND DATA</Buttonify>
    </div>,
    destination
)
