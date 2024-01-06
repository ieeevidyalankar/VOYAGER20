import { ReactComponent as WorkIcon } from "../assets/workshop.svg";
import { ReactComponent as CompIcon } from "../assets/competition.svg";
import { ReactComponent as FunIcon } from "../assets/funEvents.svg";

const timelineElements = [
  {
    id: 1,
    title: "Inception",
    date: new Date("2023-01-31"),
    time: "Saturday, 4pm onwards",
    reg: "https://forms.gle/iBwPyeLBBRhbTTxK9",
    icon: <CompIcon />,
  },
  {
    id: 2,
    title: "The Creative Forge",
    date: new Date("2023-02-1"),
    time: "Saturday, 2pm onwards",
    icon: <WorkIcon />,
    reg: "https://forms.gle/heNULKBJvYvVDK1y6",
    // yt: "https://youtu.be/2_x906nn5SM",
  },
  {
    id: 3,
    title: "Shark Tank",
    date: new Date("2023-02-03"),
    time: "Sunday, 4pm onwards",
    // reg:"https://forms.gle/XRNgpwCGr1ySNwMJ9",
    icon: <FunIcon />,
  },
  {
    id: 4,
    title: "Scrape The Web",
    date: new Date("2023-02-06"),
    time: "Saturday, 9.30am onwards",
    // reg:"https://forms.gle/qAe6dMddwu6UCk3M7",
    icon: <WorkIcon />,
  },
  {
    id: 5,
    title: "Brewing JavaFX",
    date: new Date("2023-02-08"),
    time: "Sunday, 4pm onwards",
    icon: <WorkIcon />,
    // reg: "https://forms.gle/GVDHjNAtYm56gYnXA",
    // yt: "https://youtu.be/_GP9MI9X36A",
  },
  {
    id: 6,
    title: "Weaving The Web",
    date: new Date("2023-02-11"),
    time: "Saturday, 2pm onwards",
    // reg:"https://forms.gle/MFPQkypPiskHXcmh8",
    icon: <CompIcon />,
  },
];

export default timelineElements;
