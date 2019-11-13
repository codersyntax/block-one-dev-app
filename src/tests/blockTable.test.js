import React from "react";
import { shallow } from "enzyme";
import BlockTable from "../components/blockTable";

const wrapper = shallow(<BlockTable />);

const fakeBlock = {
  block_num: "89578803",
  timestamp: "2019-11-12T23:36:16.500",
  transactions: [0, 1],
  action_mroot:
    "d6334cf0c11302a38819c5f325e6279f7ad0221fb84de844c775891c561fbb0e",
  confirmed: 0,
  id: "0556dd331fa704a3491dc3ac959022b3935b8684f58d8ab2d6e92288b5a11de9",
  previous: "0556dd32512375342f71fe80ae1bec92d4998e1f3b3989490b51245b5b4e49e9",
  producer_signature:
    "SIG_K1_Ke6XnS2xjnXc6EVqHBKRXNuE2DXDsM3tkGwDbHt3QmDGxd65fvMftDruZCbxVDDHY7jHTYzU1rKpUJxoHcWAuFuRRynEsV",
  ref_block_prefix: "2898468169",
  schedule_version: "1484",
  transaction_mroot:
    "79acd374f1e9064252017035e691645dff185f516cf1db9de5242c785b6a218c"
};

const fakeBlocks = [
  fakeBlock,
  fakeBlock,
  fakeBlock,
  fakeBlock,
  fakeBlock,
  fakeBlock,
  fakeBlock,
  fakeBlock,
  fakeBlock,
  fakeBlock
];

it("should show correct block hash value", () => {
  expect(wrapper.find("span.loading").text()).toBe(
    "Loading current block chain information"
  );
});

it("should no longer display loading when block table has been filled", () => {
  wrapper.setState({ blockTable: fakeBlocks });
  expect(wrapper.find("span.loading").exists()).toBe(false);
});

it("should show correct table column header block hash value", () => {
  expect(wrapper.find("th.block-hash").text()).toBe("Block Hash");
});

it("should show correct table column header block timestamp value", () => {
  expect(wrapper.find("th.block-timestamp").text()).toBe("Block Timestamp");
});

it("should show correct table column header block transaction count value", () => {
  expect(wrapper.find("th.block-transaction-count").text()).toBe(
    "Block Transaction Count"
  );
});

it("should show correct number of blocks", () => {
  expect(wrapper.find("tbody.block-infos").children().length).toBe(10);
});

it("should no longer display loading when block table has been filled", () => {
  clickLoadButton();
  expect(wrapper.find("span.loading").text()).toBe(
    "Loading current block chain information"
  );
});

function clickLoadButton() {
  wrapper.find("button.btn").simulate("click");
}
