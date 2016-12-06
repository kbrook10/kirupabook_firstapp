var destination = document.getElementById('container')

var { Router, Route, IndexRoute, IndexLink, Link} = ReactRouter;

class Home extends React.Component {
    render() {
        return(
            <div>
                <h2>HELLO</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        )
    }
}

class Contact extends React.Component {
    render() {
        return(
            <div>
                <h2>GOT QUESTIONS</h2>
                <p>The easist thing to do is post on our <a href='http://forum.kirupa.com'>forum</a></p>
            </div>
        )
    }
}
class Stuff extends React.Component {
    render() {
        return(
            <div>
                <h2>Stuff</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>et dolore magna aliqua</li>
                    <li> magna aliqua</li>
                    <li>dolore magna</li>
                    <li>ulvinar diam</li>
                </ol>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Simple SPA</h1>
                <ul className='header'>
                    <li><IndexLink to='/' activeClassName='active'>Home</IndexLink></li>
                    <li><Link to='/stuff' activeClassName='active'>Stuff</Link></li>
                    <li><Link to='/contact' activeClassName='active'>Contact</Link></li>
                </ul>
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Router>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='stuff' component={Stuff}/>
            <Route path='contact' component={Contact}/>
        </Route>
    </Router>,
    destination
)
