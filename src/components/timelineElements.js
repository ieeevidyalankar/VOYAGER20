import { ReactComponent as WorkIcon } from "../assets/workshop.svg";
import { ReactComponent as CompIcon } from "../assets/competition.svg";
import { ReactComponent as FunIcon } from "../assets/funEvents.svg";
import { ReactComponent as WebIcon } from "../assets/webinar.svg";

const timelineElements = [
  {
    id: 1,
    title: "Techloop",
    date: new Date("2022-03-13"),
    time: "Saturday, 6pm onwards",
    icon: <FunIcon />,
  },
  {
    id: 2,
    title: "Power of CMD",
    date: new Date("2022-03-19"),
    time: "Saturday, 6pm onwards",
    icon: <WorkIcon />,
  },
  {
    id: 3,
    title: "Into the JumbleVerse",
    date: new Date("2022-03-20"),
    time: "Sunday, 6pm onwards",
    icon: <FunIcon />,
  },
  {
    id: 4,
    title: "Shark Tank",
    date: new Date("2022-03-26"),
    time: "Saturday, 6pm onwards",
    icon: <CompIcon />,
  },
  {
    id: 5,
    title: "Computer Vision AI Webinar",
    date: new Date("2022-03-27"),
    time: "Sunday, 6pm onwards",
    icon: <WebIcon />,
  },
  {
    id: 6,
    title: "Stack game using Three.js",
    date: new Date("2022-04-02"),
    time: "Saturday, 6pm onwards",
    icon: <WorkIcon />,
  },
  {
    id: 7,
    title: "XR Genesis Webinar",
    date: new Date("2022-04-03"),
    time: "Sunday, 3pm onwards",
    icon: <WebIcon />,
  },
  {
    id: 8,
    title: "Cloud Computing Webinar",
    date: new Date("2022-04-03"),
    time: "Sunday, 6pm onwards",
    icon: <WebIcon />,
  },
  {
    id: 9,
    title: "XR VR AI Webinar",
    date: new Date("2022-04-09"),
    time: "Saturday, 3pm onwards",
    icon: <WebIcon />,
  },
  {
    id: 10,
    title: "Competitive Programming Webinar",
    date: new Date("2022-04-09"),
    time: "Saturday, 6pm onwards",
    icon: <WebIcon />,
  },
  {
    id: 11,
    title: "Codeager",
    date: new Date("2022-04-10"),
    time: "Sunday, 6pm onwards",
    icon: <CompIcon />,
  },
];

export default timelineElements;
