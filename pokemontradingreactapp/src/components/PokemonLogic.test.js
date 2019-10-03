import React from 'react';
import ReactDOM from 'react-dom';
import Pokemon from './Pokemon';
import PokemonLogic from './PokemonLogic';

import {shallow, configure, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('<PokemonLogic/>', () => {

    let pokemonTest;
    let wrapper;

    beforeEach(() => {
        configure({ adapter: new Adapter() });
        pokemonTest = {id: '1', name: 'bulbasaur', sprite: 'http://static.pokemonpets.com/images/monsters-images-800-800/1-Bulbasaur.png'};
        wrapper = shallow(<PokemonLogic pokemon={pokemonTest}/>);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PokemonLogic pokemon={pokemonTest}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('shows and hides popup', () => {
        const MockCallBack = jest.fn();
        wrapper = mount(<PokemonLogic onClick={MockCallBack} pokemon={pokemonTest}/>);
        wrapper.find(Pokemon).update().setState({
            username: 'test'
        });
        wrapper.find('#buybutton').simulate('click');
        expect(MockCallBack.mock.calls.length).toEqual(1);
    });
})