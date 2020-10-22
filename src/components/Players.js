import React, { Component } from 'react';
import axios from 'axios';
import './css/Players.css'

export class Players extends Component {
  state = {
    player: [],
    searchText: '',
    selectedPlayer : null
  };

  onPlayerClick = (item) => {
    // console.log('from the app', item) 
    this.setState({selectedPlayer: item.strDescriptionEN })
  }

  searchPlayer = async (searchText) => {
    const response = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${searchText}`
    );
    
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

        {this.state.player?.length > 0 ? this.state.player.map((item) => (
            <div className = "container" key = {item.idPlayer}>
                <div className = "row">
                    <div className = "col-lg-5 col-md-5 col-sm-12 col-xs-12 detail-img">
                        <img src = {item.strCutout} style = {{width: '100%'}} className = "player-img" alt =""/>   
                    </div>
                    <div className = "col-lg-7 col-md-7 col-sm-12 col-xs-12 details">
                      <h1>Name: {item.strPlayer}</h1>
                      <h4>Nationality: {item.strNationality}</h4>
                      <h4>Club: {item.strTeam}</h4>                    
                      <h4>Born: {item.dateBorn}</h4>
                      <h4>Birth location: {item.strBirthLocation}</h4>
                      <h4>Position: {item.strPosition}</h4>
                      <h4>Height: {item.strHeight}</h4>
                      <h4>Weight: {item.strWeight}</h4>
                      <h4>Average wage: {item.strWage}</h4><br/>

                      <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalLong" onClick = {() => {this.onPlayerClick(item)}} style = {{pointer: 'cursor'}} >More Information</button>

                      <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title" id="exampleModalLongTitle" style = {{pointer: 'cursor', color: 'black'}}>About</h1>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                            <h6 style = {{pointer: 'cursor', color: 'black'}}>{this.state.selectedPlayer}</h6>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>                
                    </div>  
                </div>
                <br/><br/>
                <div className = " flex-images">
                    <img src = {item.strFanart1} alt =""/>
                    <img src = {item.strFanart2} alt =""/>
                    <img src = {item.strFanart3} alt =""/>
                    <img src = {item.strFanart4} alt =""/>
                    <img src = {item.strThumb} alt =""/>
                    <img src = {item.strRender} alt =""/>
                    <img src = {item.strBanner} alt =""/>
                </div><br/><br/> 
            </div>         
        )):<h1 className= "text-center" style = {{fontWeight: 'bolder', color: '#38003c'}}>No result found</h1>}
      </div>
    );
  }
}

export default Players;
