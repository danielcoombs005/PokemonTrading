import React from 'react';
import '../App.css'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            password: '',
            showLogin: false,
            showLogout: false,
            username: ''
        }
        this.changeLogIn = this.changeLogIn.bind(this);
        this.changeLogOut = this.changeLogOut.bind(this);
        this.checkIfUser = this.checkIfUser.bind(this);
        this.createTestDB = this.createTestDB.bind(this);
        this.displayLogIn = this.displayLogIn.bind(this);
        this.displayLogOut = this.displayLogOut.bind(this);
        this.LogOut = this.LogOut.bind(this);
        this.onChangeHandlerPassword = this.onChangeHandlerPassword.bind(this);
        this.onChangeHandlerUsername = this.onChangeHandlerUsername.bind(this);
        this.showUser = this.showUser.bind(this);
    }

    async changeLogIn() {
        await this.setState({
            showLogin: !this.state.showLogin
        })
    }

    async changeLogOut() {
        await this.setState({
            showLogout: !this.state.showLogout
        })
    }

    checkIfUser() {
        let user = this.createTestDB().users;
        for (let i = 0; i < user.length; i++) {
            if (this.state.username === user[i].username) {
                if (this.state.password === user[i].password) {
                    this.setState({
                        isLoggedIn: !this.state.isLoggedIn,
                        showLogin: !this.state.showLogin
                    })
                } else {
                    break;
                }
            }
        }
    }

    createTestDB() { //TOUSE
        let users = [
          {
            'id': 1,
            'username': 'test',
            'password': 'test'
          },
          {
            'id': 2,
            'username': 'daniel',
            'password': 'password'
          },
          {
            'id': 3,
            'username': 'a',
            'password': 'a'
          }
        ]
        return { users };
      }

    displayLogIn() {
        if (this.state.showLogin) {
            return (
                <form style={{border: "1px solid black"}}>
                    <input type="text" value={this.state.username} onChange={(event) => this.onChangeHandlerUsername(event)} placeholder="Username" />
                    <br/>
                    <input type="password" value={this.state.password} onChange={(event) => this.onChangeHandlerPassword(event)} placeholder="Password" />
                    <br/>
                    <input type="submit" value="Log In" onClick={this.checkIfUser}/>
                </form>
            )
        }
    }

    displayLogOut() {
        if (this.state.showLogout) {
            return (
                <form style={{border: "1px solid black"}}>
                    <input type="button" value="Log Out" onClick={this.LogOut}/>
                </form>
            )
        }
    }

    LogOut() {
        this.setState({
            isLoggedIn: false,
            showLogout: false,
            username: ''
        })
    }

    onChangeHandlerPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    onChangeHandlerUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    showUser() {
        if (this.isLoggedIn) {
            return (
                <h1>Hello world!</h1>
            )
        }
    }

    render() {
        let user = <h1> </h1>;
        let loginSign = <h1> </h1>;
        if (this.state.isLoggedIn) {
            user = <h1 onClick={this.changeLogOut}>{this.state.username}</h1>;
        }
        if (!this.state.isLoggedIn) {
            loginSign = <h1 onClick={this.changeLogIn}>Login</h1>;
        }
        return (
            <header className="header">
                <nav className="navigate">
                    {loginSign}
                    {user}
                </nav>
                <h1>
                    Pokemon Trading
                </h1>
                <div>
                    {this.displayLogIn()}
                    {this.displayLogOut()}
                </div>
            </header>
        )
    }
}

export default Header;