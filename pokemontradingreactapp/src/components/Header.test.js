import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import App from '../App';

describe('<Header/>', () => {
    
    let wrapper;

    beforeEach(() => {
        configure({ adapter: new Adapter() });
        wrapper = shallow(<Header/>);
    })
    
    it('changes login/logout', () => {
        wrapper = shallow(<Header/>);
        //tests changeLogIn()
        expect(wrapper.state('showLogin')).toEqual(false);
        wrapper.instance().changeLogIn();
        expect(wrapper.state('showLogin')).toEqual(true);
        wrapper.instance().changeLogIn();
        expect(wrapper.state('showLogin')).toEqual(false);
        //tests changeLogOut()
        expect(wrapper.state('showLogout')).toEqual(false);
        wrapper.instance().changeLogOut();
        expect(wrapper.state('showLogout')).toEqual(true);
        wrapper.instance().changeLogOut();
        expect(wrapper.state('showLogout')).toEqual(false);
    });

    it('checks if user exists', () => { //to finish
        wrapper = shallow(<Header setUser={'test'}/>);
        //has incorrect username
        wrapper.setState({
            username: 'incorrect',
            password: 'thisdoesntmatter'
        })
        wrapper.instance().checkIfUser();
        expect(wrapper.state('isLoggedIn')).toEqual(false);
        expect(wrapper.state('showLogin')).toEqual(false);
        //has incorrect password
        wrapper.setState({
            username: 'test',
            password: 'incorrect'
        })
        expect(wrapper.state('isLoggedIn')).toEqual(false);
        expect(wrapper.state('showLogin')).toEqual(false);

        //has correct username and password
        // wrapper.setState({ //TODO: figure out props
        //     username: 'test',
        //     password: 'test'
        // })
        // wrapper.find('App').setProps('setUser')();
        // wrapper.instance().checkIfUser();
        // expect(wrapper.state('isLoggedIn')).toEqual(true);
        // expect(wrapper.state('showLogin')).toEqual(false);
    })

    //complete
    it('renders login when clicked', () => {
        wrapper = shallow(<Header/>);
        expect(wrapper.find('form').exists()).toBeFalsy();
        wrapper.setState({showLogin: true});
        const div = document.createElement('div');
        ReactDOM.render(<Header/>, div);
        ReactDOM.unmountComponentAtNode(div);
        expect(wrapper.find('form').exists()).toBeTruthy();
    });

    //complete
    it('renders logout when clicked', () => {
        wrapper = shallow(<Header/>);
        expect(wrapper.find('form').exists()).toBeFalsy();
        wrapper.setState({showLogout: true});
        const div = document.createElement('div');
        ReactDOM.render(<Header/>, div);
        ReactDOM.unmountComponentAtNode(div);
        expect(wrapper.find('form').exists()).toBeTruthy();
    })

    //complete
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
    
    //complete
    it('updates all setState correctly', () => {
        wrapper = shallow(<Header/>);
        wrapper.setState({
            isLoggedIn: true,
            password: 'testpassword',
            showLogin: true,
            showLogout: true,
            username: 'testusername'
        });
        expect(wrapper.state('isLoggedIn')).toEqual(true);
        expect(wrapper.state('password')).toEqual('testpassword');
        expect(wrapper.state('showLogin')).toEqual(true);
        expect(wrapper.state('showLogout')).toEqual(true);
        expect(wrapper.state('username')).toEqual('testusername');
    })
})
