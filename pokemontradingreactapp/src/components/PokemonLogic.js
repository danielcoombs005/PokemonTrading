import React from 'react';
import '../App.css';

class PokemonLogic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sprite: props.pokemon.sprite,
            name: props.pokemon.name,
            type: props.pokemon.type,
            id: props.pokemon.id,
            showPopUp: false
        }
        this.Buy = this.Buy.bind(this);
        this.ShowHidePopUp = this.ShowHidePopUp.bind(this);
    }

    Buy(pokemon) {
        if (this.state.showPopUp) {
            return (
                <div className="popup-outside">
                    <div className="popup">
                        <img id="image" src={this.state.sprite} alt={this.state.name}/>
                        <h1>Would you like to purchase {this.state.name} for {this.state.id} coins?</h1>
                        <div className="pokebuttons">
                            <button>Ok</button>
                            <button onClick={this.ShowHidePopUp}>No thanks</button>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <p></p>
        )
    }

    async ShowHidePopUp() {
        await this.setState({
            showPopUp: !this.state.showPopUp
        })
    }

    render() {
        return (
            <div>
                <div className = "pokeinfo">
                    <img id="image" src={this.state.sprite} alt={this.state.name}/>
                    <h3 id="name">{this.state.name}</h3>
                    <h3 id="desc">Type: {this.state.type}</h3>
                    <h3 id="pkmnid">ID: {this.state.id}</h3>

                    <div className = "pokebuttons">
                        <button onClick={this.ShowHidePopUp}>Buy</button>
                        <button onClick={() => console.log('lol')}>Sell</button>
                    </div>
                </div>
                <this.Buy />
            </div>
        )
    }
}

export default PokemonLogic;