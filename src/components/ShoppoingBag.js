import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addGroceryById} from '../actions';

class ShoppingBag extends Component {

  render() {
    console.log('shoppingBage local state',this.props.shoppingBage);
    const listOFdeailts = this.props.shoppingBage.map((detail) =>
	        <li key={detail.id}
            className="list-group-item"
            >
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
    shoppingBage: state.shoppingBage
  }
}
export default connect(mapStateToProps, {addGroceryById})(ShoppingBag);
