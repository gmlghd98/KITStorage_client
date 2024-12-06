import React from 'react';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <InventoryProfile
          image={this.props.inventory.image}
          name={this.props.inventory.name}
          owner={this.props.inventory.owner}
        />
        <InventoryInfo
          quantity={this.props.inventory.quantity}
          startDate={this.props.inventory.startDate}
          endDate={this.props.inventory.endDate}
        />
      </div>
    );
  }
}

class InventoryProfile extends React.Component {
  render() {
    return (
      <div>
        <img
          className="inventory-profile-img"
          src={this.props.image}
          alt="profile"
        />
        <h2>
          {this.props.name}({this.props.owner})
        </h2>
      </div>
    );
  }
}

class InventoryInfo extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.quantity}</p>
        <p>{this.props.startDate.toLocaleDateString()}</p>
        <p>{this.props.endDate.toLocaleDateString()}</p>
      </div>
    );
  }
}

export default Inventory;
