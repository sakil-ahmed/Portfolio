import heroImage from "./../images/avatar.png";
// portfplio images
import minimog from "./../images/foxkit-main.jpg";
import grover from "./../images/grover.png";
import v2 from "./../images/portfolio.png";
import okiro from "./../images/okiro.png";
import facit from "./../images/facitimg.png";
import start from "./../images/startbox.png";

// Hero Section Data
const heroData = {
  name: {
    fName: "Sakil",
    lName: "Ahmed",
  },
  sub_title: "Web Developer based In Bangladesh",
  btn_text: "Get Connect",
  img: heroImage,
};

// Portfolio Section Data

const portfolioData = {
  title: "What I Do for My Clients",
  sub_title: "Portfolio",
  filter_links: [
    {
      text: "all",
      categories: "*",
    },
    {
      text: "E-Commerce",
      categories: "e-commerce",
    },
    {
      text: "Blog",
      categories: "blog",
    },
    {
      text: "Portfolio",
      categories: "portfolio",
    },
    {
      text: "Deshboard",
      categories: "deshboard",
    },
  ],
  card: [
    {
      img: minimog,
      href: "https://minimog.netlify.app/",
      title: "Minimog",
      category: "e-commerce",
    },
    {
      img: grover,
      href: "https://groverstore.netlify.app/",
      title: "Grover",
      category: "e-commerce",
    },
    {
      img: v2,
      href: "https://sakilsahmed.netlify.app/",
      title: "Portfolio V2",
      category: "portfolio",
    },
    {
      img: okiro,
      href: "https://okario.netlify.app/",
      title: "Okairo",
      category: "blog",
    },
    {
      img: facit,
      href: "https://facitdashboard.netlify.app/auth-pages/login",
      title: "Facit",
      category: "deshboard",
    },
    {
      img: start,
      href: "https://startbox.netlify.app/",
      title: "StartBox(only Desktop)",
      category: "blog",
    },
  ],
};

export { heroData, portfolioData };
