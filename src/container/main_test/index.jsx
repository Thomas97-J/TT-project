import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

export default function Test() {
  const [aElSection, setAElSection] = useState([]);
  const [curSIdx, setCurSIdx] = useState(0);

  const [ref1, inView1, entry1] = useInView({ triggerOnce: false });
  const [ref2, inView2, entry2] = useInView({ triggerOnce: false });
  const [ref3, inView3, entry3] = useInView({ triggerOnce: false });
  const [ref4, inView4, entry4] = useInView({ triggerOnce: false });

  function doScroll(sidx) {
    let next = sidx < 0 ? 0 : sidx;

    next = next > aElSection.length - 1 ? aElSection.length - 1 : next;

    setCurSIdx(next);
    aElSection[next].scrollIntoView({
      block: "start",
      inline: "start",
      behavior: "smooth",
    });
  }

  useEffect(() => {
    setAElSection([
      entry1?.target,
      entry2?.target,
      entry3?.target,
      entry4?.target,
    ]);
  }, [entry1?.target, entry2?.target, entry3?.target, entry4?.target]);

  return (
    <MainWrapper
      className="test"
      onWheel={(e) => {
        setTimeout(function () {
          if (e.deltaY < 0) doScroll(curSIdx - 1);
          else doScroll(curSIdx + 1);
        }, 100);
      }}
    >
      <section ref={ref1}>
        <h2>Section 1 title</h2>
        <p>Section contents</p>
      </section>
      <section ref={ref2} className="banner2">
        <h2>Section 2 title</h2>
        <p>Section contents</p>
      </section>
      <section ref={ref3}>
        <h2>Section 3 title</h2>
        <p>Section contents</p>
      </section>
      <section ref={ref4}>
        <h2>Section 4 title</h2>
        <p>Section contents</p>
      </section>
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  section {
    min-height: 100vh;
    padding-top: 70px;
    &.banner2 {
      min-height: 400px;
    }
  }
`;
