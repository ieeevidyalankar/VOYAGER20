import { ReactComponent as WorkIcon } from "../assets/workshop.svg";
import { ReactComponent as CompIcon } from "../assets/competition.svg";
import { ReactComponent as FunIcon } from "../assets/funEvents.svg";
import { ReactComponent as WebIcon } from "../assets/webinar.svg";

const timelineElements = [
  {
    id: 1,
    title: "Techloop",
    date: new Date("2022-03-13"),
    time: "Saturday, 4pm onwards",
    icon: <FunIcon />,
  },
  {
    id: 2,
    title: "Power of CMD",
    date: new Date("2022-03-19"),
    time: "Saturday, 2pm onwards",
    icon: <WorkIcon />,
    reg: "https://forms.gle/rHwpjPKo1fh1k4Mi7",
    yt: "https://youtu.be/2_x906nn5SM",
  },
  {
    id: 3,
    title: "Into the JumbleVerse",
    date: new Date("2022-03-20"),
    time: "Sunday, 4pm onwards",
    icon: <FunIcon />,
  },
  {
    id: 4,
    title: "Shark Tank",
    date: new Date("2022-03-26"),
    time: "Saturday, 9.30am onwards",
    icon: <CompIcon />,
    reg: "https://forms.gle/BDgmvreedwfLMovv9",
  },
  {
    id: 5,
    title: "Computer Vision Webinar",
    date: new Date("2022-03-27"),
    time: "Sunday, 4pm onwards",
    icon: <WebIcon />,
    reg: "https://forms.gle/e5cu8Aesg87Hib1B9",
  },
  {
    id: 6,
    title: "Stack game using Three.js",
    date: new Date("2022-04-02"),
    // time: "Saturday, 4pm onwards",
    icon: <WorkIcon />,
  },
  {
    id: 7,
    title: "XR Genesis Webinar",
    date: new Date("2022-04-03"),
    // time: "Sunday, 3pm onwards",
    icon: <WebIcon />,
  },
  {
    id: 8,
    title: "Cloud Computing Webinar",
    date: new Date("2022-04-03"),
    // time: "Sunday, 6pm onwards",
    icon: <WebIcon />,
  },
  {
    id: 9,
    title: "Metaverse: Career and Future Webinar",
    date: new Date("2022-04-09"),
    // time: "Saturday, 3pm onwards",
    icon: <WebIcon />,
  },
  {
    id: 10,
    title: "Competitive Programming Webinar",
    date: new Date("2022-04-09"),
    // time: "Saturday, 6pm onwards",
    icon: <WebIcon />,
  },
  {
    id: 11,
    title: "Codeager",
    date: new Date("2022-04-10"),
    // time: "Sunday, 6pm onwards",
    icon: <CompIcon />,
  },
];

export default timelineElements;
