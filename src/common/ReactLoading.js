import React from "react";
import ReactLoading from "react-loading";
import { Section, Title} from "./genericloading";
import "./loadingstyles.css";

const LoadingBars = (title, type) => (
  <Section>
    <Title>{title}</Title>
   <ReactLoading type={type} color="#1F3A93" />
  </Section>
);

export default LoadingBars;