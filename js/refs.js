var destination = document.getElementById('container')

var Colorizer = React.createClass({
    getInitialState: function() {
      return {
          color: '',
          bgColor: ''
      }
    },
    colorValue: function(event) {
      this.setState({color: event.target.value});
    },
    setNewColor: function(event){
      this.setState({bgColor: this.state.color});
      event.preventDefault();
    },
    render: function() {
      var squareStyle = {
        backgroundColor: this.state.bgColor
      };

      return (
        <div className="colorArea">
          <div style={squareStyle} className="colorSquare"></div>

          <form onSubmit={this.setNewColor}>
            <input onChange={this.colorValue} placeholder="Enter a color value"></input>
            <button type="submit">go</button>
          </form>
        </div>
      );
    }
});
ReactDOM.render(
    <div>
        <Colorizer />
    </div>,
    destination
)
