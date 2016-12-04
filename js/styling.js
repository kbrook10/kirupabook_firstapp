var destination = document.getElementById('container')

class Letter extends React.Component {
    render() {
        return(
            <div className="letter">
                {this.props.children}
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Letter>A</Letter>
        <Letter>E</Letter>
        <Letter>I</Letter>
        <Letter>O</Letter>
        <Letter>U</Letter>
    </div>,
    destination
)
