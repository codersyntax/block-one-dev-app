import React, { Component } from "react";

class BlockData extends Component {
  state = {
    timeStamp: this.props.timeStamp,
    blockHash: this.props.blockHash,
    transactions: this.props.transactions,
    raw: this.props.raw,
    expanded: false
  };
  render() {
    return (
      <React.Fragment>
        <tr key={this.state.blockHash} onClick={this.handleExpandBlockData}>
          <td>{this.state.blockHash}</td>
          <td>{this.state.timeStamp}</td>
          <td>{this.state.transactions.length}</td>
        </tr>
        {this.state.expanded && (
          <tr>
            <td colSpan="3">
              <ul>
                <li>Action Root: {this.props.raw.action_mroot}</li>
                <li>Block Number: {this.props.raw.block_num}</li>
                <li>Confirmed: {this.props.raw.confirmed}</li>
                <li>Id: {this.props.raw.id}</li>
                <li>Previous: {this.props.raw.previous}</li>
                <li>Producer: {this.props.raw.producer}</li>
                <li>Product Signature: {this.props.raw.producer_signature}</li>
                <li>
                  Reference Block Prefix: {this.props.raw.ref_block_prefix}
                </li>
                <li>Schedule Version: {this.props.raw.schedule_version}</li>
                <li>Time Stamp: {this.props.raw.timestamp}</li>
                <li>Transaction Root: {this.props.raw.transaction_mroot}</li>
              </ul>
            </td>
          </tr>
        )}
      </React.Fragment>
    );
  }

  handleExpandBlockData = () => {
    this.setState({ expanded: !this.state.expanded });
  };
}

export default BlockData;
