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
      portfolio: [],
      sortBy: "name"
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
    const copyPortfolio = this.state.portfolio.slice();
    const newPortfolio = copyPortfolio.filter(el => el !== stock )
    this.setState({
      portfolio: newPortfolio
    })
  }

  buyStock = stock => {
    const newPortfolio = this.state.portfolio.slice();
    newPortfolio.push(stock)
    this.setState({
      portfolio: newPortfolio
    })
  }

  updateSortBy = val => {
    this.setState({
      sortBy: val
    })
  }

  sortStocks = () => {
    if (!this.state.stocks.length === 0) return;
    const stocks = this.state.stocks.slice()

    if (this.state.sortBy === "name"){  
      stocks.sort((a,b) => {
        let tickerA = a.ticker;
        let tickerB = b.ticker;

        if (tickerA < tickerB) return -1;
        if (tickerA > tickerB) return 1;
        return 0;
      })
    } else if (this.state.sortBy === "price") {
      return stocks.sort((a,b) => b.price - a.price)
    }

    return stocks
  }

  render() {
    let stocksToShow = this.sortStocks()
    console.log(stocksToShow)
    return (
      <div>
        <SearchBar  sortBy={this.state.sortBy}
                    updateSortBy={this.updateSortBy}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks}
                              buySell={this.buySell}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio}
                                  buySell={this.buySell}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
