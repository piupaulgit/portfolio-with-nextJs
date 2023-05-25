"use client"

import React, { useState } from "react";

export function Tabs(props: any) {
  const [activeTab, setActiveTab] = useState(findActiveTab(props.children));

  function findActiveTab(a: any) {
    return a.reduce((activeVal: any, currentValue: any, i: number) => {
      if (currentValue.props.active) {
        return i;
      }

      return activeVal;
    }, 0);
  }
  return (
    <div className="container mx-auto">
      <div className={`flex
      ${
        props.position
      } ${!props.divider && 'mb-8'}`}>
        {props.children.map((item: any, i: number) => {
          return (
            <>
              <Tab
                key={`tab-{i}`}
                currentTab={i}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              >
                {item.props.title}
              </Tab>
            </>
          );
        })}
      </div>
      {props.divider && <hr className="mb-5"></hr> }
      <div className="pb-2">
        {props.children.map((item: any, i: number) => {
          return <div className={` ${i === activeTab ? "visible" : "hidden"}`}>{item.props.children}</div>;
        })}
      </div>
    </div>
  );
}

export function Tab(props: any) {
  return (
    <>
      <div
        className={`px-8 py-2 text-md font-semiBold text-sm cursor-pointer
      ${
        props.activeTab === props.currentTab
          ? " text-gray-300 font-bold border-b-2 border-white bg-neutral-800"
          : " text-gray-300 border-b-[1px] border-neutral-800"
      }`}
        onClick={() => props.setActiveTab(props.currentTab)}
      >
        {props.children}
      </div>
    </>
  );
}
