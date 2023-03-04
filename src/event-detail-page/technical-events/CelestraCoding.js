import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import celestraCodingImg from "../../assets/event-images/celestra-coding.jpg";

const celestraCoding = {
  image: celestraCodingImg,
  description:
    "Are you a passionate coder looking for an opportunity to showcase your skills? If yes, then join us for our upcoming Competitive Coding Challenge!",
  type: "Technical",
  eventName: "Celestra Coding",
  dateTime: "March 17, 11:00AM",
  venue: "IT-444",
  rules: [
    "Solo Participation",
    "The logic can be implemented can in any languages.",
    "Participants can bring their own laptops.",
    "Plagiarism leads to direct disqualification",
  ],
  firstprize: 1500,
  secondprize: 1000,
  contact: [
    {
      name: "Khabilan S",
      phoneNo: "6382889722",
    },
    {
      name: "Nithin R",
      phoneNo: "9524649561",
    },
  ],
};

const CelestraCoding = () => {
  return <SingleEventPage eventDetails={celestraCoding} />;
};

export default CelestraCoding;