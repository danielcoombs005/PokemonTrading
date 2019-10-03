import React from 'react';
import ReactDOM from 'react-dom';
import Pokemon from './Pokemon';

import {shallow, configure, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('<Pokemon/>', () => {
    
    let wrapper;
    let array;
    
    beforeEach(() => {
        configure({ adapter: new Adapter() });
        wrapper = mount(<Pokemon/>);
    });

    //complete
    it('adds pokemon to inventory', () => {
        //set up
        wrapper.setState({
            currency: 500,
            inventory: [{name: 'pokemon', qty: 1, value: '1'}]
        })
        expect(wrapper.state('inventory')).toEqual([{name: 'pokemon', qty: 1, value: '1'}]);
        //adds pokemon which did not exist before, also subtracts from currency
        wrapper.instance().addToInventory({name: 'vileplume', qty: 1, value: '2'});
        let currentPokemon = wrapper.state('inventory');
        expect(currentPokemon[1].name).toEqual('vileplume');
        expect(wrapper.state('currency')).toEqual(498);
        //adds pokemon which did exist before, only changing qty, not array size
        wrapper.instance().addToInventory({name: 'vileplume', qty: 1, value: '2'});
        currentPokemon = wrapper.state('inventory');
        expect(currentPokemon[1].qty).toEqual(2);
        expect(currentPokemon.length).toEqual(2);
        expect(wrapper.state('currency')).toEqual(496);
        //does not allow user to buy pokemon if currency is too low
        wrapper.setState({
            currency: 0
        });
        wrapper.instance().addToInventory({name: 'vileplume', qty: 1, value: '2'});
        currentPokemon = wrapper.state('inventory');
        expect(currentPokemon[1].qty).toEqual(2);
        expect(wrapper.state('currency')).toEqual(0);
    });

    it('calculates currency', () => {
        wrapper.setState({
            currency: 100
        });
        wrapper.instance().calculateCurrency(10);
        expect(wrapper.state('currency')).toEqual(110);
        wrapper.instance().calculateCurrency(-5);
        expect(wrapper.state('currency')).toEqual(105);
        wrapper.instance().calculateCurrency(0);
        expect(wrapper.state('currency')).toEqual(105);
    });

    it('removes pokemon from inventory', () => {
        //set up
        wrapper.setState({
            currency: 500,
            inventory: [{name: 'pokemon', qty: 1, value: '1'}, {name: 'vileplume', qty: 2, value: '2'}]
        })
        expect(wrapper.state('inventory')).toEqual([{name: 'pokemon', qty: 1, value: '1'}, {name: 'vileplume', qty: 2, value: '2'}]);
        //subtracts qty of pokemon which exists, also adds to currency
        wrapper.instance().removeFromInventory({name: 'vileplume', qty: '1', value: '2'});
        let currentPokemon = wrapper.state('inventory');
        expect(currentPokemon[1].qty).toEqual(1);
        expect(wrapper.state('currency')).toEqual(501);
        //removes pokemon from inventory w/ qty of 1
        wrapper.instance().removeFromInventory({name: 'vileplume', qty: '1', value: '2'});
        currentPokemon = wrapper.state('inventory');
        expect(currentPokemon.length).toEqual(1);
        expect(wrapper.state('currency')).toEqual(502);
        //does not allow user to sell pokemon they do not own
        wrapper.instance().removeFromInventory({name: 'vileplume', qty: '1', value: '2'});
        expect(wrapper.state('inventory')).toEqual(currentPokemon);
        expect(wrapper.state('currency')).toEqual(502);
    });

    it('renders without crashing', () => {
        const div= document.createElement('div');
        ReactDOM.render(<Pokemon />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})