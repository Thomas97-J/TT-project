import styled from 'styled-components';

function Main() {
  return (
    <MainWrapper>
      <div className={'banner1'}></div>
      <div className={'banner2'}>
        <div></div>
        <div></div>
        <div></div>
      </div>

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
