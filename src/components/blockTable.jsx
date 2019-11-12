import React, { Component } from "react";
import { JsonRpc } from "eosjs";
import fetch from "node-fetch";
import BlockData from "./blockData";

export default class BlockTable extends Component {
  state = {
    rpc: new JsonRpc("https://api.eosnewyork.io", { fetch }),
    blockTable: []
  };
  render() {
    return (
      <div>
        <div className="float-left p-2">
          <button onClick={this.handleReload} className="btn btn-primary">
            LOAD
          </button>
          {this.state.blockTable.length === 0 &&
            "Loading current block chain information"}
        </div>
        <div className="container">
          <div className="block-table p-2">
            {this.state.blockTable.length > 0 && (
              <table className="table table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th className="table-column-header">Block Hash</th>
                    <th className="table-column-header">Block Timestamp</th>
                    <th className="table-column-header">
                      Block Transaction Count
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.blockTable.map(block => (
                    <BlockData
                      key={block.block_num}
                      id={block.block_num}
                      timeStamp={block.timestamp}
                      blockHash={block.block_num}
                      transactions={block.transactions}
                      raw={block}
                    />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    );
  }

  handleReload = () => {
    this.setState({ blockTable: [] });
    this.buildTable().then(blocks => {
      this.setState({ blockTable: blocks });
      //console.log(this.state.blockTable);
    });
  };

  componentDidMount() {
    this.buildTable().then(blocks => {
      this.setState({ blockTable: blocks });
    });
  }

  componentWillUnmount() {}

  async buildTable() {
    var blocks = [];
    var currentBlock = await this.getHeadBlock();
    blocks.push(currentBlock);
    for (var i = 0; i < 9; i++) {
      currentBlock = await this.getNextBlockData(currentBlock.previous);
      blocks.push(currentBlock);
    }
    return blocks;
  }

  async getHeadBlock() {
    return await this.state.rpc.get_block(await this.getHeadBlockId());
  }

  async getHeadBlockId() {
    var headBlockId = await this.state.rpc.get_info().then(info => {
      return info.head_block_id;
    });
    return headBlockId;
  }

  async getNextBlockData(blockId) {
    return await this.state.rpc.get_block(blockId);
  }
}
