import React, { useState } from "react";
import StyleWork from "./styleWork";
import Container from "./../../container/container";
import { StyledH2, StyledH5 } from "../../../styles/shareStyle";
import Link from "next/link";
import WorkCard from "../../workCard/workCard";
import { portfolioData } from "../../../data/data";
import { motion } from "framer-motion";

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
    let filteredData;
    if (categories === "*") {
      filteredData = portfolioData.card;
    } else {
      filteredData = portfolioData.card.filter(
        (element) => element.category === categories
      );
    }

    setSelectedCategory(filteredData);
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
            {portfolioData.filter_links.map(
              ({ text, categories, id }, index) => {
                return (
                  <li
                    key={id}
                    className={
                      index === activeIndex
                        ? "filter_item active"
                        : "filter_item"
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
              }
            )}
          </ul>
        </div>
        {/* Cards  */}
        <motion.div layout className="portfolio_cards">
          {selectedCategory.map((data, index) => {
            return <WorkCard key={index} data={data} />;
          })}
        </motion.div>
      </Container>
    </StyleWork>
  );
};

export default Work;
