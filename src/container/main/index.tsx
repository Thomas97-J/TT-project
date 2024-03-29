import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

function Main() {
  // function scrollToSection(direction: string): void {
  //   if (direction === 'up') {
  //   } else if (direction === 'down') {
  //   } else {
  //   }
  // }
  // useEffect(() => {}, []);
  //http://www.devdic.com/javascript/refer/algorithm/document:2857/%ED%9C%A0(wheel)%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%99%94%EB%A9%B4-%EB%8B%A8%EC%9C%84-%EC%9D%B4%EB%8F%99
  return (
    <MainWrapper>
      <div className={'banner1'}>main banner</div>
      <div className={'banner2'}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={'banner3'}>banner3</div>

      <footer></footer>
    </MainWrapper>
  );
}
export default Main;

const MainWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .banner1 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: rgba(0, 0, 0, 0.2);
    background-color: whitesmoke;
    font-size: 40px;
    font-weight: bold;
  }
  .banner2 {
    display: flex;
    position: relative;
    height: 300px;
    background-color: gray;
    div {
      border-color: white;
      border-width: 2px;
      border-style: solid;
      width: 100%;
      height: 100%;
      background-color: black;
    }
  }
  .banner3 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: rgba(0, 0, 0, 0.2);
    background-color: whitesmoke;
    font-size: 40px;
    font-weight: bold;
  }
  footer {
    height: 200px;
    background-color: white;
  }
`;
