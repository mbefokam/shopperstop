import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addGroceryById} from '../actions';

class Grocery extends Component {

  render() {
    console.log('local state',this.props.grocery);
    const listOFdeailts = this.props.grocery.map((detail) =>
	        <li key={detail.id}
            className="list-group-item"
            onClick={()=>this.props.addGroceryById(detail.id)}>
            <b>{detail.name}</b> - <span className="label label-info">$ {detail.cost} </span> - <span className="label label-warning">{detail.calories} KCal </span> - <span className="label label-primary">{detail.weight} mg</span>
          </li>)
    return (
      <div className="col-md-4">
				<h2 className="text-center">Grocery Items</h2>
        <ul className="list-group">
        {listOFdeailts }
				</ul>
			</div>
    );
  }

}

function mapStateToProps(state){
  console.log('mapStateToProps- Grocery.js',state);
  return{
    grocery: state
  }
}
export default connect(mapStateToProps, {addGroceryById})(Grocery);
