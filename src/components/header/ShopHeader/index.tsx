import React from 'react';
import styled from 'styled-components';

function ShopHeader() {
  return (
    <Header>
      <div>
        <a href={'/'}>TT</a>
        <span>카테고리1</span>
        <span>카테고리2</span>
        <span>카테고리3</span>
        <span>검색</span>
        <span>MY</span>
        <span>장바구니</span>
      </div>
      <div>
        <input type='text' name='' id='' />
      </div>
    </Header>
  );
}
const Header = styled.header`
  display: flex;
  position: fixed;
  flex-direction: column;

  margin: 10px;
  padding: 20px;

  box-sizing: border-box;
  justify-content: flex-start;
  top: 0;
  right: 0;
  width: 800px;
  height: 120px;
  background-color: black;
  color: white;

  span {
    margin: 0 15px;
  }
  a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
  }
  div {
    height: 100%;
  }
`;

export default ShopHeader;
