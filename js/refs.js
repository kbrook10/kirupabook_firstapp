var destination = document.getElementById('container')

class Colorizer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: '',
            bgColor: '',
        }
    }
    colorValue(event) {
        this.setState({
            color: event.target.value
        })
    }
    setNewColor(event) {
        this.setState({
            bgColor: this.state.color
        });
        this._input.value = '';
        this._input.focus();
        event.preventDefault();
    }
    render() {
        var squareStyle = {
            backgroundColor: this.state.bgColor
        };

        var self = this;
        return(
            <div className='colorArea'>
                <div style={squareStyle} className='colorSquare'>
                    <form onSubmit={this.setNewColor}>
                        <input
                            ref= {
                                function(element) {
                                    self._input = element;
                                }
                            }
                            onChange={this.colorValue}
                            placeholder='Enter a color value'>
                        </input>
                        <button type='submit'>go</button>
                    </form>
                </div>
            </div>
        )
    }

}

ReactDOM.render(
    <div>
        <Colorizer />
    </div>,
    destination
)
