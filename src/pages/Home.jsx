import React from "react";
import { StContainer } from "../styles/Container.styles";
import AddSection from "../components/AddSection/AddSection";
import Masonry from "react-masonry-css";
import { masonryBreakpoints } from "../styles/Feed.styles";
import { StFeedContainer } from "../styles/Feed.styles";
import { StImg } from "../styles/Home.styles";
import img1 from "../assets/img/1.jpeg";
import img2 from "../assets/img/2.jpeg";
import img3 from "../assets/img/3.jpeg";
import img4 from "../assets/img/4.png";
import img5 from "../assets/img/5.jpeg";
import img6 from "../assets/img/6.jpeg";
import img7 from "../assets/img/7.jpeg";
import img8 from "../assets/img/8.jpeg";

function Home() {
  return (
    <div>
      <StContainer>
        <AddSection>- Share Your Best Memento With Us</AddSection>
      </StContainer>

      <StFeedContainer>
        <Masonry
          breakpointCols={masonryBreakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <StImg width="300px" height="500px" src={img2} />

          <StImg width="300px" height="200px" src={img3} />

          <StImg width="300px" height="500px" src={img4} />

          <StImg width="300px" height="200px" src={img1} />

          <StImg width="300px" height="200px" src={img8} />

          <StImg width="300px" height="500px" src={img7} />

          <StImg width="300px" height="200px" src={img6} />

          <StImg width="300px" height="500px" src={img5} />
        </Masonry>
      </StFeedContainer>
    </div>
  );
}

export default Home;
