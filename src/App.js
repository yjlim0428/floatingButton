import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import FloatBtn from "./FloatBtn";
const Page = styled.div`
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
`;

function App() {
  const [scrollTopBtnIsVisible, setScrollTopBtnIsVisible] = useState(false);

  useEffect(() => {
    const showTopBtnOnBottom = () => {
      if (window.pageYOffset > 100) {
        setScrollTopBtnIsVisible(true);
      } else {
        setScrollTopBtnIsVisible(false);
      }
    };
    window.addEventListener("scroll", showTopBtnOnBottom);
    return () => {
      window.removeEventListener("scroll", showTopBtnOnBottom);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Page bgColor="skyblue" />
      <Page bgColor="pink" />
      {scrollTopBtnIsVisible && (
        <div onClick={scrollToTop}>
          <FloatBtn />
        </div>
      )}
    </>
  );
}

export default App;
