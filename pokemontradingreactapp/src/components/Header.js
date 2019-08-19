import React from 'react';
import '../App.css'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            showLogin: false
        }
        this.displayLogIn = this.displayLogIn.bind(this);
        this.changeLogIn = this.changeLogIn.bind(this);
    }

    displayLogIn() {
        if (this.state.showLogin) {
            alert('changed')
            return (
                <form>
                    <input type="text" name="username" value="Username" placeholder="Username" />
                    <br/>
                    <input type="password" value="Password" placeholder="Password" />
                    <br/>
                    <input type="submit" value="Log In" />
                </form>
            )
        }
    }

    changeLogIn = (truthValue) => {
        this.setState = {
            showLogin: truthValue
        }
    }

    render() {
        return (
            <header className="header">
                <nav className="navigate">
                    <h1 onClick={this.changeLogIn(true)}>Login</h1>
                </nav>
                <h1>
                    Pokemon Trading
                </h1>
                <div>
                    {this.displayLogIn()}
                </div>
            </header>
        )
    }
}

export default Header;