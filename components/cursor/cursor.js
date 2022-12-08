import React from "react";
import dynamic from "next/dynamic";
import THEME from "./../../styles/theme";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={6}
      outerSize={30}
      color="0, 192, 255"
      outerAlpha={0}
      innerScale={13}
      outerScale={0}
      innerStyle={{
        backgroundColor: "rgb(0, 192, 255 , .4)",
      }}
      outerStyle={{
        border: `2px solid ${THEME.colors.extraText}`,
        background: "transparent",
      }}
      cursor="auto"
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
};

export default Cursor;
