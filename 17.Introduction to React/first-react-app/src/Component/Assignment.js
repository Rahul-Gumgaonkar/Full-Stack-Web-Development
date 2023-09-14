import React from "react";
import { Button, Space } from "antd";
import "./Assignment.css";
import { ArrowRightOutlined } from "@ant-design/icons";

function Assignment() {
  return (
    <div className="container">
      <h1>Your user research Swiss Army knife</h1>
      <Button>
        See all features <ArrowRightOutlined />
      </Button>
    </div>
  );
}

export default Assignment;
