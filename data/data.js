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
      id: 1,
    },
    {
      text: "E-Commerce",
      categories: "e-commerce",
      id: 2,
    },
    {
      text: "Blog",
      categories: "blog",
      id: 3,
    },
    {
      text: "Portfolio",
      categories: "portfolio",
      id: 4,
    },
    {
      text: "Deshboard",
      categories: "deshboard",
      id: 5,
    },
  ],
  card: [
    {
      img: minimog,
      href: "https://minimog.netlify.app/",
      title: "Minimog",
      category: "e-commerce",
      id: 1,
    },
    {
      img: grover,
      href: "https://groverstore.netlify.app/",
      title: "Grover",
      category: "e-commerce",
      id: 2,
    },
    {
      img: v2,
      href: "https://sakilsahmed.netlify.app/",
      title: "Portfolio V2",
      category: "portfolio",
      id: 3,
    },
    {
      img: okiro,
      href: "https://okario.netlify.app/",
      title: "Okairo",
      category: "blog",
      id: 4,
    },
    {
      img: facit,
      href: "https://facitdashboard.netlify.app/auth-pages/login",
      title: "Facit",
      category: "deshboard",
      id: 5,
    },
    {
      img: start,
      href: "https://startbox.netlify.app/",
      title: "StartBox(only Desktop)",
      category: "blog",
      id: 6,
    },
  ],
};

export { heroData, portfolioData };
