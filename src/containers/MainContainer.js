import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import { BASE_URL } from '../App';

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolio: []
    }
  }

  componentDidMount(){
    fetch(BASE_URL)
      .then(resp => resp.json())
      .then(stocksArray => 
        this.setState({
          stocks: this.state.stocks.concat(stocksArray)
        })
      );
  }

  buySell = stock => {
    const portfolio = this.state.portfolio;
    portfolio.includes(stock) ? this.sellStock(stock) : this.buyStock(stock);
  }

  sellStock = stock => {
    console.log("Selling: ", stock)
  }

  buyStock = stock => {
    const newPortfolio = this.state.portfolio.slice();
    newPortfolio.push(stock)
    this.setState({
      portfolio: newPortfolio
    })
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks}
                              buySell={this.buySell}/>

            </div>
            <div className="col-4">

              <PortfolioContainer/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
