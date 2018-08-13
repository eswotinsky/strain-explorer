import React, { Component } from 'react';
import '../css/Filters.css'

class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <h2>Filters</h2>
        <hr/>

        <h3>Type</h3>
        <div className="checkbox-group">
          <input id="indica" type="checkbox"/>
          <label htmlFor="indica">Indica</label>
        </div>
        <div className="checkbox-group">
          <input id="sativa" type="checkbox"/>
          <label htmlFor="sativa">Sativa</label>
        </div>
        <div className="checkbox-group">
          <input id="hybrid" type="checkbox"/>
          <label htmlFor="hybrid">Hybrid</label>
        </div>
        <hr/>

        <h3>THC Content</h3>
        <div className="checkbox-group">
          <input id="0-10-thc" type="checkbox"/>
          <label htmlFor="0-10-thc">0% - 10%</label>
        </div>
        <div className="checkbox-group">
          <input id="11-20-thc" type="checkbox"/>
          <label htmlFor="11-20-thc">11% - 20%</label>
        </div>
        <div className="checkbox-group">
          <input id="21-30-thc" type="checkbox"/>
          <label htmlFor="21-30-thc">21% - 30%</label>
        </div>
        <hr/>

        <h3>CBD Content</h3>
        <div className="checkbox-group">
          <input id="0-10-cbd" type="checkbox"/>
          <label htmlFor="0-10-cbd">0% - 10%</label>
        </div>
        <div className="checkbox-group">
          <input id="11-20-cbd" type="checkbox"/>
          <label htmlFor="11-20-cbd">11% - 20%</label>
        </div>
        <div className="checkbox-group">
          <input id="21-30-cbd" type="checkbox"/>
          <label htmlFor="21-30-cbd">21% - 30%</label>
        </div>
        <hr/>

        <button className="btn btn-info" type="submit">Filter</button>

      </div>
    );
  }
}

export default Filters;
