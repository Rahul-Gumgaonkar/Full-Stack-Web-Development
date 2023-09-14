import { Button } from "antd";
import React from "react";
// import { Button, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

function Assignment2(props) {
  return (
    <div className="container">
      <div className="grid">
        <a href="#" size="large">
          {props.image}
        </a>
        <h2>{props.heading}</h2>
        <p>{props.para}</p>
        <Button>
          Learn more <ArrowRightOutlined />
        </Button>
      </div>
    </div>
  );
}

export default Assignment2;
