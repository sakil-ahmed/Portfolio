import React from "react";
import StyleWork from "./styleWork";
import Container from "./../../container/container";
import { StyledH2, StyledH5 } from "../../../styles/shareStyle";
import Link from "next/link";
import WorkCard from "../../workCard/workCard";
import minimog from "./../../../images/foxkit-main.jpg";
import grover from "./../../../images/grover.png";
import v2 from "./../../../images/portfolio.png";
import okiro from "./../../../images/okiro.png";
import facit from "./../../../images/facitimg.png";
import start from "./../../../images/startbox.png";

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
            <li className="filter_item active">
              <Link href="#" data-filter="*">
                All
              </Link>
            </li>
            <li className="filter_item">
              <Link href="#" data-filter=".e-commerce">
                E-Commerce
              </Link>
            </li>
            <li className="filter_item">
              <Link href="#" data-filter=".blog">
                Blog
              </Link>
            </li>
            <li className="filter_item">
              <Link href="#" data-filter=".portfolio">
                Portfolio
              </Link>
            </li>
            <li className="filter_item">
              <Link href="#" data-filter=".deshboard">
                Deshboard
              </Link>
            </li>
          </ul>
        </div>
        {/* Cards  */}
        <div className="portfolio_cards">
          <WorkCard
            img={minimog}
            href="https://minimog.netlify.app/"
            title="Minimog"
          />
          <WorkCard
            img={grover}
            href="https://groverstore.netlify.app/"
            title="Grover"
          />
          <WorkCard
            img={v2}
            href="https://sakilsahmed.netlify.app/"
            title="Portfolio V2"
          />
          <WorkCard
            img={okiro}
            href="https://okario.netlify.app/"
            title="Okairo"
          />
          <WorkCard
            img={facit}
            href="https://facitdashboard.netlify.app/auth-pages/login"
            title="Facit"
          />
          <WorkCard
            img={start}
            href="https://startbox.netlify.app/"
            title="StartBox(only Desktop)"
          />
        </div>
      </Container>
    </StyleWork>
  );
};

export default Work;
