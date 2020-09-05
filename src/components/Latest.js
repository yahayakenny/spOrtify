import React, { Component } from 'react'
import axios from 'axios'

export class Latest extends Component {
    state = {
        latest: [],
      };
    
      componentDidMount() {
        axios
          .get(
            'https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328'
          )
          .then((res) => {
            const getLatest = res.data.events;
            console.log(getLatest);
            this.setState({ latest: getLatest });
          });
      }
      
    render() {
        return (
            <div class ="bg-light">
            <h1 class = "text-center latest">LATEST NEWS</h1>
            <div class = "displayLatest container">
               {this.state.latest.map (item => (
                   <div class="col-md-6 individual">
                   <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative">
                     <div class="col p-4 d-flex flex-column position-static">
                       <strong class="d-inline-block mb-2 text-success">{item.strLeague}</strong>
                       <h3 class="mb-0">{item.strEvent}</h3>
                       <div class="mb-1 text-muted">{item.strdateEvent}</div>
                       <p class="mb-auto">{item.strDescriptionEN}</p>
                       <a href={item.strVideo} style = {{fontSize: "35px"}}>
                      <i class='fab fa-youtube'></i>
                      </a>
                     </div>
                     <div class="col-auto d-none d-lg-block">
                       <img src= {item.strThumb} style = {{width: "100%"}} alt = "#" />
                     </div>
                   </div>
                 </div>
               ))}
            </div>
            </div>            
        )
    }
}
export default Latest
