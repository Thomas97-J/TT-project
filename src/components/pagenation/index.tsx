import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageLink from './PageLinkBtn';

interface Props {
  totalItems: number;
  itemCountPerPage: number;
  pageCount: number;
  currentPage: number;
}

export default function Pagination({
  totalItems,
  itemCountPerPage,
  pageCount,
  currentPage,
}: Props) {
  const totalPages = Math.ceil(totalItems / itemCountPerPage);
  const [start, setStart] = useState(1);
  const noPrev = start === 1;
  const noNext = start + pageCount - 1 >= totalPages;
  useEffect(() => {
    if (currentPage === start + pageCount) setStart((prev) => prev + pageCount);
    if (currentPage < start) setStart((prev) => prev - pageCount);
  }, [currentPage, pageCount, start]);

  return (
    <Wrapper>
      <div className={`${'move'} ${noPrev && 'invisible'}`}>
        <Link to={`?page=${start - 1}`}>{'<'}</Link>
      </div>
      {[...Array(pageCount)].map((_, i) => {
        if (start + i <= totalPages)
          return (
            <PageLink
              key={i}
              active={currentPage === start + i}
              to={`?page=${start + i}`}
              pageNumber={start + i}
            />
          );
      })}
      <div className={`${'move'} ${noNext && 'invisible'}`}>
        <Link to={`?page=${start + pageCount}`}>{'>'}</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: #888;
  font-size: 14px;
  .move {
    position: relative;
    cursor: pointer;
    margin: 0 10px;
    a {
      text-decoration: none;
      color: #888;
    }
  }

  .invisible {
    visibility: hidden;
  }
`;
