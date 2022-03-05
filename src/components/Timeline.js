import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from "./timelineElements";
import moment from "moment";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline animate={true} lineColor={"#41749c"}>
        {timelineElements.map((el) => {
          let date = moment(el.date).format("LL");
          let today = moment().format("LL");
          return (
            <VerticalTimelineElement
              key={el.id}
              date={date}
              dateClassName={today === date ? "tl-date-active" : "tl-date"}
              iconStyle={{ background: "#41749c", color: "#fff" }}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: today === date ? "#41749c" : "#e1eef7",
                color: today === date ? "#fff" : "#333",
              }}
              contentArrowStyle={{
                borderRight:
                  today === date ? "7px solid #41749c" : "7px solid  #e1eef7",
              }}
              icon={el.icon}
            >
              <h3 className="vertical-timeline-element-title">{el.title}</h3>
              {/* <p className="vertical-timeline-element-subtitle">{el.time}</p> */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
