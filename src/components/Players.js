import React, { Component } from 'react';
import axios from 'axios';
import './css/Players.css'

export class Players extends Component {
  state = {
    player: [],
    searchText: '',
  };

  searchPlayer = async (searchText) => {
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${searchText}`
    );
    console.log(response.data);
    this.setState({ player: response.data.player });
  };

  handleChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.searchPlayer(this.state.searchText);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.searchText}
            placeholder= "Search for your favorite player...and press Enter"
          />
        </form><br/><br/><br/>

        {this.state.player.map((item) => (
            <div class = "container">
                <div class = "row">
                    <div class = "col-lg-5 col-md-5 col-sm-12 col-xs-12 detail-img">
                        <img src = {item.strCutout} style = {{width: '100%'}} class = "player-img" alt =""/>
                        <div class = "text-left details-text"><br/>
                            <h1>Name: {item.strPlayer}</h1>
                            <h4>Nationality: {item.strNationality}</h4>
                            <h4>Club: {item.strTeam}</h4>       
                       </div>
                    </div>

                    <div class = "col-lg-7 col-md-7 col-sm-12 col-xs-12 details">
                        <h1>About</h1>
                            <h4>Born: {item.dateBorn}</h4>
                            <h4>Birth location: {item.strBirthLocation}</h4>
                            <h4>Position: {item.strPosition}</h4>
                            <h4>Height: {item.strHeight}</h4>
                            <h4>Weight: {item.strWeight}</h4>
                            <h4>Average wage: {item.strWage}</h4> 
                            <h2>Description:</h2>                                          
                        <h6>{item.strDescriptionEN}</h6>
                    </div>
                </div>
                <div class = " flex-images">
                    <img src = {item.strFanart1} alt =""/>
                    <img src = {item.strFanart2} alt =""/>
                    <img src = {item.strFanart3} alt =""/>
                    <img src = {item.strFanart4} alt =""/>
                    <img src = {item.strThumb} alt =""/>
                    <img src = {item.strRender} alt =""/>
                    <img src = {item.strBanner} alt =""/>
                </div><br/><br/> 
            </div>         
        ))}
      </div>
    );
  }
}

export default Players;
