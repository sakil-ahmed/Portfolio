import React from "react";
import StyleWork from "./styleWork";
import Container from "./../../container/container";
import { StyledH2, StyledH5 } from "../../../styles/shareStyle";
import Link from "next/link";
import WorkCard from "../../workCard/workCard";

const Work = () => {
  return (
    <StyleWork>
      <Container>
        <StyledH5 className="portfolio_badge">Portfolio</StyledH5>
        <StyledH2 className="portfolio_title">
          What I Do for My Clients
        </StyledH2>
        {/* Filter Link */}
        <div className="portfolio_filter">
          <ul className="filter">
            <li className="filter_item">
              <Link href="#" data-filter="*">
                All
              </Link>
            </li>
            <li className="filter_item">
              <Link href="#" data-filter=".youtube">
                Youtube
              </Link>
            </li>
            <li className="filter_item">
              <Link href="#" data-filter=".vimeo">
                Vimeo
              </Link>
            </li>
            <li className="filter_item">
              <Link href="#" data-filter=".vimeo">
                Vimeo
              </Link>
            </li>
          </ul>
        </div>
        {/* Cards  */}
        <div className="portfolio_cards">
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
      </Container>
    </StyleWork>
  );
};

export default Work;
