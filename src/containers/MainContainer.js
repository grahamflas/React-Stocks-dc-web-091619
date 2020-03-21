import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import { BASE_URL } from '../App';

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {
      stocks: []
    }
  }

  componentDidMount(){
    fetch(BASE_URL)
      .then(resp => resp.json())
      .then(stocksArray => this.setState({stocks: this.state.stocks.concat(stocksArray)}))
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer />

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
