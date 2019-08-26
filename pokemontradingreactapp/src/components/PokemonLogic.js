import React from 'react';
import '../App.css';

class PokemonLogic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buySell: '',
            id: props.pokemon.id,
            name: props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.substring(1),
            showPopUp: false,
            sprite: props.pokemon.sprite,
            type: props.pokemon.type,
        }
        this.Buy = this.Buy.bind(this);
        this.BuyBG = this.BuyBG.bind(this);
        this.BuySuccess = this.BuySuccess.bind(this);
        this.Sell = this.Sell.bind(this);
        this.SellBG = this.SellBG.bind(this);
        this.SellSuccess = this.SellSuccess.bind(this);
        this.ShowHidePopUp = this.ShowHidePopUp.bind(this);
    }

    Buy(pokemon) {
        if (this.state.showPopUp && this.state.buySell === 'buy') {
            return (
                <div className="popup-outside">
                    <div className="popup">
                        <img id="image" src={this.state.sprite} alt={this.state.name}/>
                        <h1>Would you like to purchase {this.state.name} for {this.state.id} coins?</h1>
                        <div className="pokebuttons">
                            <button onClick={this.BuySuccess}>Ok</button>
                            <button onClick={this.ShowHidePopUp}>No thanks</button>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            null
        )
    }

    async BuyBG() {
        this.ShowHidePopUp();
        await this.setState({
            buySell: 'buy'
        })
    }

    BuySuccess = () => {
        alert(`Congratulations on your purchase of ${this.state.name}!`)
        this.ShowHidePopUp();
        this.props.parentMethod({name: this.state.name, qty: 1});
    }

    Sell(pokemon) {
        if (this.state.showPopUp && this.state.buySell==='sell') {
            return (
                <div className="popup-outside">
                    <div className="popup">
                        <img id="image" src={this.state.sprite} alt={this.state.name}/>
                        <h1>Would you like to sell your {this.state.name} for {Math.floor(this.state.id / 2)} coins?</h1>
                        <div className="pokebuttons">
                            <button onClick={this.SellSuccess}>Ok</button>
                            <button onClick={this.ShowHidePopUp}>No thanks</button>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            null
        )
    }

    async SellBG() {
        this.ShowHidePopUp();
        await this.setState({
            buySell: 'sell'
        })
    }

    async SellSuccess() {
        await this.ShowHidePopUp();
        alert(`Don't worry! We'll take good care of ${this.state.name}!`)
    }

    ShowHidePopUp() {
        this.setState({
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
                        <button onClick={this.BuyBG}>Buy</button>
                        <button onClick={this.SellBG}>Sell</button>
                    </div>
                </div>
                <this.Buy />
                <this.Sell />
            </div>
        )
    }
}

export default PokemonLogic;