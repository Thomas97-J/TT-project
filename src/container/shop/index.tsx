import styled from 'styled-components';

function Shop() {
  return (
    <ShopWrapper>
      <LogoBanner>Logo</LogoBanner>
      <div className={'banner1'}></div>
      <div className={'banner2'}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <footer></footer>
    </ShopWrapper>
  );
}
export default Shop;

const ShopWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .banner1 {
    height: 800px;
    background-color: whitesmoke;
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
  footer {
    height: 200px;
    background-color: white;
  }
`;
const LogoBanner = styled.div`
  height: 210px;
  padding-top: 20px;
  font-size: 48px;
  font-weight: bold;
`;
