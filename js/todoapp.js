var destination = document.getElementById('container');
var { Router, Route, IndexRoute, IndexLink, Link} = ReactRouter;


ReactDOM.render(
    <Router>
        {/* <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='stuff' component={Stuff}/>
            <Route path='contact' component={Contact}/>
        </Route> */}
    </Router>,
    destination
)
