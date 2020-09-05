import React, { Component } from 'react';
import axios from 'axios';
import './css/Home.css';
import premierLeague from './images/premierLeague.jpeg';


export class Home extends Component {
  state = {
    teams: [],
  };

  componentDidMount() {
    axios
      .get(
        'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
      )
      .then((res) => {
        const getTeams = res.data.teams;
        console.log(getTeams);
        this.setState({ teams: getTeams });
      });
  }

  render() {
    return (
      <div>
        <section className='jumbotron text-center bg-light'>
          <div className='container '>
            <h1 style={{ color: '#640a4c' }}>Your Favourite Premier League Teams</h1>
            <br />
            <img src={premierLeague} className='league' alt ="" />
          </div>
        </section>

        <div className='display-teams album'>
          {this.state.teams.map((item) => (
            <div className='flip-card bg-light'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img
                    src={item.strTeamBadge}
                    style={{ width: '300px', height: '300px' }}
                    alt = ""
                    key = {item.idTeam}
                  />
                </div>
                <div className='flip-card-back'>
                  <h1>{item.strTeam}</h1>
                  <p>NickNames: {item.strKeywords}</p>
                  <p>Stadium: {item.strStadium}</p>
                  <p>Stadium Location: {item.strStadiumLocation}</p>
                  <p>Stadium Capacity: {item.intStadiumCapacity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
