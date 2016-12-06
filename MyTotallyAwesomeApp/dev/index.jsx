import React from 'react'
import ReactDOM from 'react-dom'

var destination = document.getElementById('container')

class HelloWorld extends React.Component {
    render() {
        return(
            <p>Hello, {this.props.greetTarget}</p>
        )
    }
}

ReactDOM.render(
    <div>
        <HelloWorld greetTarget='Batman' />
        <HelloWorld greetTarget='Iron Man' />
        <HelloWorld greetTarget='Mega Man' />
        <HelloWorld greetTarget='Bono' />
    </div>,
    destination
)
