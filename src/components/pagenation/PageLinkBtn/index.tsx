import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

interface LinkProps {
  to: string;
  active: boolean;
  pageNumber: number;
}
export default function PageLink({ to, active, pageNumber }: LinkProps) {
  return (
    <PageLinkWrapper>
      <Link className={`${'page'} ${active && 'active'}`} to={to}>
        {pageNumber}
      </Link>
    </PageLinkWrapper>
  );
}
const PageLinkWrapper = styled.li`
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: center;
  .page {
    margin: 0 5px;
    cursor: pointer;
    width: 25px;
    border-radius: 3px;
    border: solid 1px rgba(0, 0, 0, 0);
    text-align: center;
    &:hover {
      border: solid 1px #aaa;
    }
  }
  a {
    height: 25px;
    line-height: 25px;
    text-decoration: none;
    color: black;
    &.active {
      font-weight: 700;
      background: #888;
      color: white;
    }
  }
`;
