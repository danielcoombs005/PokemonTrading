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

    render() {
        return (
            <header className="header">
                <nav className="navigate">
                    <h1 onClick={this.changeLogIn}>Login</h1>
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

    displayLogIn() {
        if (this.state.showLogin) {
            return (
                <form style={{border: "1px solid black"}}>
                    <input type="text" name="username" placeholder="Username" />
                    <br/>
                    <input type="password" placeholder="Password" />
                    <br/>
                    <input type="submit" value="Log In" />
                </form>
            )
        }
    }

    async changeLogIn() {
        await this.setState({
            showLogin: !this.state.showLogin
        })
    }
}

export default Header;