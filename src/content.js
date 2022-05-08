import {
  ballparkRater,
  gardenPlotter,
  pizzaPlace,
  senateAPI,
  fitTrain,
} from "./images";

export const ballpark = {
  title: "Ballpark Rater",
  subtitle: "Professional baseball field locating and rating app",
  icons: [
    "devicon-bootstrap-plain",
    "devicon-express-original",
    "devicon-html5-plain",
    "devicon-javascript-plain",
    "devicon-mongodb-plain",
  ],
  detail:
    "As is the case with all of my projects, I chose Ballpark Rater to expose myself to new concepts in the form of an app themed around a personal interest. Being my first larger-scale app, learning several new concepts at once challenged me. I was introduced to RESTful routing, CRUD operations, middleware, and databases. The practice I got with asynchronous JavaScript was beneficial and a necessary tool I took on most of my following projects. Have fun checking out the site and leave a rating for any ballparks you've visited!",
  image: ballparkRater[0],
  app: "https://ballpark-rater.herokuapp.com/",
  code: "https://github.com/krause-matt/ballpark-rater-express-mongodb",
};
export const garden = {
  title: "Garden Plotter",
  subtitle: "Social site for sharing your garden with friends",
  icons: [
    "devicon-html5-plain",
    "devicon-javascript-plain",
    "devicon-react-original",
    "devicon-redux-original",
  ],
  detail:
    "I've always thought an app to keep track of garden and planting details from year-to-year would be useful, so I decided to build one using React and Redux. Several customizable garden features and components were purposely included to learn Redux state management. My main focus for this project was the front-end, so I took care of the REST API with a limited npm package. Implementing CRUD operations using this strategy was tricky. If I were to build the app today, I'd establish a proper database and allow photo uploads. I learned authentication/authorization using Google OAuth for this app.",
  image: gardenPlotter[1],
  app: "https://garden-plotter-react-redux.herokuapp.com/",
  code: "https://github.com/krause-matt/gardenplotter-react-redux",
};
export const pizza = {
  title: "The Pizza Place",
  subtitle: "E-Commerce site for ordering pizza online",
  icons: [
    "devicon-bootstrap-plain",
    "devicon-firebase-plain",
    "devicon-javascript-plain",
    "devicon-react-original",
  ],
  detail:
    "I wanted to try creating an e-commerce site and get more experience with React code. The order customization portion of the app was a great learning process, as I had a combination of drop-downs, radio buttons, and checkboxes all contributing to state. I learned Google Firebase and Stripe to take care of the backend database and payment processes. I would like to try implementing Redux into this app or my next e-commerce project for more efficient state management between major components.",
  image: pizzaPlace[3],
  app: "https://the-pizzaplace.netlify.app/",
  code: "https://github.com/krause-matt/ecommerce-pizzaplace-react",
};
export const senate = {
  title: "Senate Vote Comparator",
  subtitle: "Compare Senate votes using the ProPublica Congresss API",
  icons: [
    "devicon-bootstrap-plain",
    "devicon-javascript-plain",
    "devicon-react-original",
  ],
  detail:
    "During a prior presidential primary race, I remember being curious about vote differences in congress between the candidates. This came to my mind when determining what to build for my first React app. Lucky, a public API existed with all of the data necessary to make a vote comparitor I was interested in. With almost 20 state items and multiple API requests, I had to work through problems with infinite React rendering. I used log statements to better understand the process order of my code and help correctly set my useEffect dependencies and useRef variables.",
  image: senateAPI[0],
  app: "https://senate-vote-comparator.netlify.app/",
  code: "https://github.com/krause-matt/senate-vote-comparator-api",
};
export const fit = {
  title: "FITtrain",
  subtitle: "Gym landing page designed using CSS grid",
  icons: ["devicon-html5-plain", "devicon-sass-original"],
  detail:
    "This project differs from the rest in that it is design-first rather than function-first. I had seen both CSS grid and Sass being used while watching developer tutorials on YouTube, and wanted to try them for myself. The speed at which you can design an app with Bootstrap is convenient, but I enjoyed learning how to utilize my creative chops a bit more with custom styling. I have taken my lesson on Sass forward to other work, including the portfolio site you're on right now!",
  image: fitTrain[0],
  app: "https://fit-train.netlify.app/",
  code: "https://github.com/krause-matt/css-grid-fittrain",
};

export const projectInfo = [
  { id: "ballpark", title: "Ballpark Rater" },
  { id: "garden", title: "Garden Plotter" },
  { id: "pizza", title: "Pizza Place" },
  { id: "senate", title: "Senate Vote Comparator" },
  { id: "fit", title: "FITtrain" },
];

export const skillDesc = {
  bootstrap:
    "I've used Bootstrap v4 and v5 to create attractive and responsive sites.",
  css: "My projects have been enhanced with CSS media queries, flexbox/grid, and animations.",
  express:
    "I used Express as a REST API server for my Ballpark Rater CRUD app. Check it out:",
  firebase:
    "I taught myself how to utilize Google Firebase when setting up an orders database for my React Pizza Store app. Check it out:",
  git: "I utilize Git for version control, documentation, and establishing remotes on all of my apps.",
  github:
    "I've been contributing my code to GitHub almost daily since completing three online web development courses in Oct 2021.",
  html: "Experienced using HTML essentials such as inputs, lists, forms, and tables. I am working on improving the readability of my code through utilization of semantics.",
  javascript:
    "I have completed two JavaScript courses totaling over 40 hours, and have registered for an advanced topics course as well. JavaScript is used in all of my projects.",
  mongodb:
    "Mongo is the DB for my Ballpark Rater CRUD app which uses three schemas. Check it out:",
  nodejs:
    "I use node to run JavaScript code and npm to add necessary libraries and frameworks to my projects.",
  python:
    "I use Python at work for data analysis and visualization projects. Not used explicitly for web development, but I feel it enhances my overall coding skill.",
  react:
    "Three projects listed below (plus the site you're on right now) were built to be interactive and seamless using React state management and Hooks.",
  redux:
    "My Garden Plotter app has a larger component and state system which allowed me to learn and deploy Redux. Check it out:",
  sass: "I enjoy taking advantage of Sass nesting and global variables to make styling easier.",
};

export const skillLinks = {
  link: {
    express: "https://ballpark-rater.herokuapp.com/",
    firebase: "https://the-pizzaplace.netlify.app/",
    github: "https://github.com/krause-matt",
    mongodb: "https://ballpark-rater.herokuapp.com/",
    redux: "https://garden-plotter-react-redux.herokuapp.com/",
  },
  text: {
    express: "Ballpark Rater App",
    firebase: "Pizza Place App",
    github: "Visit my GitHub",
    mongodb: "Ballpark Rater App",
    redux: "Garden Plotter App",
  },
};
