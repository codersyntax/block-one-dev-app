import React from "react";
import { shallow } from "enzyme";
import BlockData from "../components/blockData";

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

const wrapper = shallow(
  <BlockData
    key={fakeBlock.block_num}
    id={fakeBlock.block_num}
    timeStamp={fakeBlock.timestamp}
    blockHash={fakeBlock.block_num}
    transactions={fakeBlock.transactions}
    raw={fakeBlock}
  />
);

it("should show correct block hash value", () => {
  expect(wrapper.find("td.block-hash-value").text()).toBe("89578803");
});

it("should show correct block timestamp value", () => {
  expect(wrapper.find("td.block-timestamp-value").text()).toBe(
    "2019-11-12T23:36:16.500"
  );
});

it("should show correct block transactions count value", () => {
  expect(wrapper.find("td.block-transactions-count-value").text()).toBe("2");
});

it("should row be collapsed", () => {
  expect(wrapper.state().expanded).toBe(false);
});

it("should row be expanded", () => {
  toggleDetails();
  expect(wrapper.state().expanded).toBe(true);
});

it("should show details when expanded", () => {
  expect(wrapper.find("ul.details-row").exists()).toBe(true);
});

it("should show correct number of block details", () => {
  expect(wrapper.find("ul.details-row").children().length).toBe(11);
});

//TODO: further test details

it("should not show details when not expanded", () => {
  toggleDetails();
  expect(wrapper.find("details-row").exists()).toBe(false);
});

function toggleDetails() {
  wrapper.find("tr.block-info").simulate("click");
}
