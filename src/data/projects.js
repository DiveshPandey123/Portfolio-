// bi icons
import {
  BiLogoCss3,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";

// tb icons
import {
  TbBrandNextjs,
  TbApi,
  TbDatabase,
  TbBrandPrisma,
} from "react-icons/tb";

// si icons
import {
  SiThemoviedatabase,
  SiExpress,
  SiSocketdotio,
  SiChakraui,
  SiNodedotjs,
} from "react-icons/si";

const ProjectsData = [

  {
    id: "1",
    name: "Hair_Atlas",
    image: "./hair_atlas.png",
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
    description: "This website suggest hair styles based on user face shape.",
    github: "https://github.com/DiveshPandey123/Hair_Atlas",
  },

  {
    id: "2",
    name: "Chat Application",
    image: "./Yo_Chat.png",
    icons: [
      BiLogoReact,    // React
      SiChakraui,     // Chakra UI
      SiSocketdotio,  // Socket.io
      SiNodedotjs,    // Node.js
      SiExpress,     // Express
      BiLogoMongodb, // MongoDB
    ],
    description:
      "A real-time chat application built with React and Node.js. It supports user authentication, real-time messaging.",
    github: "https://github.com/DiveshPandey123/YOCHAT",
  },

  {
    id: "3",
    name: "Ecommerce Website",
    image: "./ecom.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description: "This website provides users with all the basic kinds of shopping items.",
    github: "https://github.com/DiveshPandey123/Ecommerce_Web_Demo",
  },

  {
    id: "4",
    name: "Blog Application",
    image: "./NextBlogX.png",
    icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb, TbBrandPrisma],
    description: "This application allows users to express their thoughts and experiences through blogs.",
    github: "https://github.com/DiveshPandey123/NextBlogX",
  }
];

export default ProjectsData;
