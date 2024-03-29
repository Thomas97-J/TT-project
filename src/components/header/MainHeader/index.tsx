import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import SearchBtn from './SearchBtn';
import UserBtn from './UserBtn';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BagBtn from './BagBtn';
import useComponentSize from '../../../hooks/useComponentSize';

function Mainheader() {
  const [serchOpen, setSerchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [componentRef, size] = useComponentSize();
  const isShopPage = location.pathname.includes('/shop');
  return (
    <Header
      layout={true}
      transition={{ duration: 0.1 }}
      ref={componentRef}
      className={`${isShopPage ? 'shop' : ''}`}
    >
      <AnimatePresence>
        <motion.div
          // layout={true}
          transition={{ duration: 0.1 }}
          className={`top ${isShopPage ? 'shop' : ''}`}
        >
          <div>
            <Link className={'logo'} to={'/'}>
              T T
            </Link>
            <Link to='/shop'>SHOP</Link>
            {isShopPage ? (
              <>
                <Link to='/shop/collection1'>Collection1</Link>
                <Link to='/shop/SS'>SS</Link>
                <Link to='/shop/FW'>FW</Link>
              </>
            ) : (
              ''
            )}
          </div>

          <DivLine />
          <div>
            <SearchBtn
              onClick={() => {
                setSerchOpen(!serchOpen);
              }}
            />
            <UserBtn
              onClick={() => {
                navigate('/my');
              }}
            />
            <BagBtn
              onClick={() => {
                navigate('/my');
              }}
            ></BagBtn>{' '}
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {serchOpen ? (
          <motion.div
            className='bottom'
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0, y: -30 }}
          >
            <input type='text' placeholder='type something' />
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </Header>
  );
}

const Header = styled(motion.header)`
  position: fixed;
  margin: 10px;
  box-sizing: border-box;
  z-index: 1000;
  top: 0;
  right: 0;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  &.shop {
    width: 500px;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 10px;
    background-color: black;
    z-index: 1;
    position: relative;
    div {
      display: flex;
    }
    a {
      &.logo {
        font-size: 20px;
        font-weight: bold;
      }
      display: flex;
      align-items: center;
      margin: 0 15px;
      color: white;
      text-decoration: none;

      background: none;
    }
    button {
      display: flex;

      align-items: center;

      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
    }
  }
  .bottom {
    display: flex;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 1px;
    padding: 2px;
    box-sizing: border-box;
    background-color: black;
    z-index: -1;
    input {
      width: 80%;
      height: 30px;
      margin: 0 10px;
      background: none;
      border: none;
      border-bottom: 1px solid white;
      color: white;
    }
  }
`;

const DivLine = styled.div`
  border: 0px solid white;
  border-right: 0.5px;
  height: 25px;
  width: 0px;
  border-style: solid;
  border-color: white;
`;
export default Mainheader;
