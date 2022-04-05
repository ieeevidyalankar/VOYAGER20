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
  },
  {
    id: 5,
    title: "Computer Vision Webinar",
    date: new Date("2022-03-27"),
    time: "Sunday, 4pm onwards",
    icon: <WebIcon />,
    reg: "https://forms.gle/e5cu8Aesg87Hib1B9",
    yt: "https://youtu.be/_GP9MI9X36A",
  },
  {
    id: 6,
    title: "Stack game using Three.js",
    date: new Date("2022-04-02"),
    time: "Saturday, 2pm onwards",
    icon: <WorkIcon />,
    reg: "https://forms.gle/oJr9x8cVXTdKDrKr7",
    yt: "https://youtu.be/muz_BXjiGCE",
  },
  {
    id: 7,
    title: "XR Genesis Webinar",
    date: new Date("2022-04-03"),
    time: "Sunday, 12pm onwards",
    icon: <WebIcon />,
    reg: "https://forms.gle/evs69hyxMSMkVjBa7",
    yt: "https://youtu.be/SUnUn2VBIX4",
  },
  {
    id: 8,
    title: "Cloud Computing Webinar",
    date: new Date("2022-04-03"),
    time: "Sunday, 4pm onwards",
    icon: <WebIcon />,
    reg: "https://forms.gle/9ApWZtt9E6As3EpP9",
    yt: "https://youtu.be/bpd7BGFdywU",
  },
  {
    id: 9,
    title: "Metaverse: Career and Future Webinar",
    date: new Date("2022-04-09"),
    time: "Saturday, 12pm onwards",
    icon: <WebIcon />,
    reg: "https://forms.gle/dqqFvTHAVmwSbYiL8",
  },
  {
    id: 10,
    title: "Competitive Programming Webinar",
    date: new Date("2022-04-09"),
    time: "Saturday, 4pm onwards",
    icon: <WebIcon />,
    reg: "https://forms.gle/uSi6DDrxJWh9PDiQ9",
  },
  {
    id: 11,
    title: "Codeager",
    date: new Date("2022-04-10"),
    time: "Sunday, 2pm onwards",
    icon: <CompIcon />,
    reg: "https://forms.gle/bNxSAoxvAorHZU6x9",
  },
];

export default timelineElements;
