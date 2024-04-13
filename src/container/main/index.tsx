import styled from "styled-components";
import React, { useEffect, useState } from "react";
import MainFooter from "../../components/footers";
import { useInView } from "react-intersection-observer";

function Main() {
  // function scrollToSection(direction: string): void {
  //   if (direction === 'up') {
  //   } else if (direction === 'down') {
  //   } else {
  //   }
  // }
  const [ref1, inView1, entry1] = useInView({ triggerOnce: false });
  const [ref2, inView2, entry2] = useInView({ triggerOnce: false });
  const [ref3, inView3, entry3] = useInView({ triggerOnce: false });
  const [ref4, inView4, entry4] = useInView({ triggerOnce: false });
  const bannerRefArray: any[] = [ref1, ref2, ref3, ref4];
  const bannerInviewArray: any[] = [inView1, inView2, inView3, inView4];
  const [bannerEntryArray, setBannerEntryArray] = useState<
    Array<Element | undefined>
  >([entry1?.target, entry2?.target, entry3?.target, entry4?.target]);
  const [sectionNumber, setSectionNumber] = useState(0);

  useEffect(() => {
    setBannerEntryArray([
      entry1?.target,
      entry2?.target,
      entry3?.target,
      entry4?.target,
    ]);
    console.log("Debug:entry update");
  }, [entry1?.target, entry2?.target, entry3?.target, entry4?.target]);

  function move(e: React.WheelEvent<HTMLDivElement>) {
    // e.preventDefault();
    if (e.deltaY < 0) {
      console.log("Move up", sectionNumber, bannerEntryArray);

      bannerEntryArray[sectionNumber - 1]?.scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth",
      });

      setSectionNumber(sectionNumber <= 0 ? 0 : sectionNumber - 1);
    } else {
      console.log("Move Down", sectionNumber, bannerEntryArray);

      // console.log(
      //   "Move down",
      //   sectionNumber,
      //   window.scrollY +
      //     bannerEntryArray[sectionNumber + 1]?.getBoundingClientRect().top
      // );
      // window.scrollTo({
      //   top:
      //     window.scrollY +
      //     bannerEntryArray[sectionNumber + 1]?.getBoundingClientRect().top,

      //   behavior: "smooth",
      // });
      bannerEntryArray[sectionNumber + 1]?.scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth",
      });
      setSectionNumber(sectionNumber >= 3 ? 3 : sectionNumber + 1);
    }
  }

  //http://www.devdic.com/javascript/refer/algorithm/document:2857/%ED%9C%A0(wheel)%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%99%94%EB%A9%B4-%EB%8B%A8%EC%9C%84-%EC%9D%B4%EB%8F%99
  return (
    <MainWrapper
      className={"main"}
      onWheel={(e) => {
        move(e);
        // setTimeout(function () {
        //   if (e.deltaY < 0) doScroll(1);
        //   else doScroll(-1);
        // }, 50);
      }}
    >
      <div className={"banner1"} id={"banner1"} ref={bannerRefArray[0]}>
        main banner
      </div>
      <div className={"banner2"} ref={bannerRefArray[1]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={"banner3"} ref={bannerRefArray[2]}>
        banner3
      </div>
      <div className={"banner4"} ref={bannerRefArray[3]}>
        banner4
      </div>
      <MainFooter />
    </MainWrapper>
  );
}
export default Main;

const MainWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  -ms-overflow-style: none;

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
`;
