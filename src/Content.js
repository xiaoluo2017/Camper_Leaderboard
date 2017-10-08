import React, { Component } from 'react';
import $ from 'jquery';
import './Content.css';

class Content extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handleAlltime = this.handleAlltime.bind(this);
    this.handleRecent = this.handleRecent.bind(this);
  }

  componentWillMount() {
    var endpoint = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    var _this = this;
    $.getJSON(endpoint, function(data){
      _this.setState({
        items: data
      });
    }); 
  } 
  
  handleAlltime() {
    var endpoint = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
    var _this = this;
    $.getJSON(endpoint, function(data){
      _this.setState({
        items: data
      });
    }); 
    this.forceUpdate();
  }
  
  handleRecent() {
    var endpoint = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    var _this = this;
    $.getJSON(endpoint, function(data){
      _this.setState({
        items: data
      });
    }); 
    this.forceUpdate();
  }

  render() {
    const content = this.state.items.map((item, i) => {
      return (
        <div className="row" key={i}>
          <div className="col-md-1 text-center">{i}</div>
          <div className="col-md-1"><img src={item.img} className="img-fluid" /></div>
          <div className="col-md-5"><div>{item.username}</div></div>
          <div className="col-md-3 text-center"><div>{item.recent}</div></div>
          <div className="col-md-2 text-center"><div>{item.alltime}</div></div>
        </div>
      )
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-1 text-center">#</div>
          <div className="col-md-6">Camper Name</div>
          <div className="col-md-3 text-center"><button className="btn btn-block btn-outline-dark" onClick={this.handleRecent}>Points in past 30 days</button></div>
          <div className="col-md-2 text-center"><button className="btn btn-block btn-outline-dark" onClick={this.handleAlltime}>All time points</button></div>
        </div>
        {content}
      </div>
    )
  }
}

export default Content;
