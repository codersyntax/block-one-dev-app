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
  producer: "blockpooleos",
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

it("should show action root in block details", () => {
  expect(wrapper.find("ul.details-row").childAt(0).text()).toBe(`Action Root: ${fakeBlock.action_mroot}`);
});

it("should show block number in block details", () => {
  expect(wrapper.find("ul.details-row").childAt(1).text()).toBe(`Block Number: ${fakeBlock.block_num}`);
});

it("should show confirmed in block details", () => {
  expect(wrapper.find("ul.details-row").childAt(2).text()).toBe(`Confirmed: ${fakeBlock.confirmed}`);
});

it("should show id in block details", () => {
  expect(wrapper.find("ul.details-row").childAt(3).text()).toBe(`Id: ${fakeBlock.id}`);
});

it("should show previous block id in block details", () => {
  expect(wrapper.find("ul.details-row").childAt(4).text()).toBe(`Previous: ${fakeBlock.previous}`);
});

it("should show producer in block details", () => {
  expect(wrapper.find("ul.details-row").childAt(5).text()).toBe(`Producer: ${fakeBlock.producer}`);
});

it("should show producer signature in block details", () => {
  expect(wrapper.find("ul.details-row").childAt(6).text()).toBe(`Product Signature: ${fakeBlock.producer_signature}`);
});

it("should show reference block prefix in block details", () => {
  expect(wrapper.find("ul.details-row").childAt(7).text()).toBe(`Reference Block Prefix: ${fakeBlock.ref_block_prefix}`);
});

it("should show schedule version in block details", () => {
  expect(wrapper.find("ul.details-row").childAt(8).text()).toBe(`Schedule Version: ${fakeBlock.schedule_version}`);
});

it("should show time stamp in block details", () => {
  expect(wrapper.find("ul.details-row").childAt(9).text()).toBe(`Time Stamp: ${fakeBlock.timestamp}`);
});

it("should show transaction root in block details", () => {
  expect(wrapper.find("ul.details-row").childAt(10).text()).toBe(`Transaction Root: ${fakeBlock.transaction_mroot}`);
});

it("should not show details when not expanded", () => {
  toggleDetails();
  expect(wrapper.find("details-row").exists()).toBe(false);
});

function toggleDetails() {
  wrapper.find("tr.block-info").simulate("click");
}
