import React, { useState } from "react";
import StyleWork from "./styleWork";
import Container from "./../../container/container";
import { StyledH2, StyledH5 } from "../../../styles/shareStyle";
import Link from "next/link";
import WorkCard from "../../workCard/workCard";
import { portfolioData } from "../../../data/data";

const Work = () => {
  /* A state hook. It is used to store the state of the component. */
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(portfolioData.card);

  /**
   * @param index
   */
  const handleClick = (index) => setActiveIndex(index);

  /**
   * @param categories
   */
  const handleFilter = (categories) => {
    const filteredData = portfolioData.card.filter(
      (element) => element.category === categories
    );
    setSelectedCategory(categories === "*" ? portfolioData.card : filteredData);
  };

  return (
    <StyleWork id="portfolio">
      <Container>
        <StyledH5 className="portfolio_badge">
          {portfolioData.sub_title}
        </StyledH5>
        <StyledH2 className="portfolio_title">{portfolioData.title}</StyledH2>
        {/* Filter Link */}
        <div className="portfolio_filter">
          <ul className="filter">
            {portfolioData.filter_links.map(({ text, categories }, index) => {
              return (
                <li
                  key={index}
                  className={
                    index === activeIndex ? "filter_item active" : "filter_item"
                  }
                  onClick={() => {
                    handleClick(index);
                    handleFilter(categories);
                  }}
                  data-filter={categories}
                >
                  <Link href="#">{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Cards  */}
        <div className="portfolio_cards">
          {selectedCategory.map((data, i) => {
            return <WorkCard key={i} data={data} />;
          })}
        </div>
      </Container>
    </StyleWork>
  );
};

export default Work;
