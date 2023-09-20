// import { Slider } from "antd";
import Slider from "./Component/Slider";
import "./App.css";
import Assignment from "./Component/Assignment";
import Assignment2 from "./Component/Assignment2";

import Card from "./Component/Card";
import Head from "./Component/upper";
import { CreditCardOutlined } from "@ant-design/icons";

function App() {
  const mid = {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    width: "80%",
    border: "2px solid red",
    margin: "10px",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div>
      <Assignment />
      <div style={mid}>
        <Assignment2
          image={<CreditCardOutlined />}
          heading="Card sorting"
          para="Discover how pople group and label information."
        />

        <Assignment2
          image={<CreditCardOutlined />}
          heading="Card sorting"
          para="Discover how pople group and label information."
        />

        <Assignment2
          image={<CreditCardOutlined />}
          heading="Card sorting"
          para="Discover how pople group and label information."
        />

        <Assignment2
          image={<CreditCardOutlined />}
          heading="Card sorting"
          para="Discover how pople group and label information."
        />

        <Assignment2
          image={<CreditCardOutlined />}
          heading="Card sorting"
          para="Discover how pople group and label information."
        />

        <Assignment2
          image={<CreditCardOutlined />}
          heading="Card sorting"
          para="Discover how pople group and label information."
        />

        <Assignment2
          image={<CreditCardOutlined />}
          heading="Card sorting"
          para="Discover how pople group and label information."
        />

        <Assignment2
          image={<CreditCardOutlined />}
          heading="Card sorting"
          para="Discover how pople group and label information."
        />
      </div>
    </div>

    // <div className="container">
    //   <Head heading="Recently Uploaded" name="Popular" />
    //   <div style={mid}>
    //     <Card
    //       image="https://i.ytimg.com/vi/dCz9OdZWtIQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0k5WoQ0SaLlDBSdC6JWFU8rxVAQ"
    //       description="CSS Variables|Toggle"
    //       view="1.7k views"
    //     />
    //     <Card
    //       image="https://i.ytimg.com/vi/dCz9OdZWtIQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0k5WoQ0SaLlDBSdC6JWFU8rxVAQ"
    //       description="CSS Variables|Toggle"
    //       view="1.7k views"
    //     />

    //     <Card
    //       image="https://i.ytimg.com/vi/dCz9OdZWtIQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0k5WoQ0SaLlDBSdC6JWFU8rxVAQ"
    //       description="CSS Variables|Toggle"
    //       view="1.7k views"
    //     />

    //     <Card
    //       image="https://i.ytimg.com/vi/dCz9OdZWtIQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0k5WoQ0SaLlDBSdC6JWFU8rxVAQ"
    //       description="CSS Variables|Toggle"
    //       view="1.7k views"
    //     />

    //     <Card
    //       image="https://i.ytimg.com/vi/dCz9OdZWtIQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0k5WoQ0SaLlDBSdC6JWFU8rxVAQ"
    //       description="CSS Variables|Toggle"
    //       view="1.7k views"
    //     />

    //     <Card
    //       image="https://i.ytimg.com/vi/dCz9OdZWtIQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0k5WoQ0SaLlDBSdC6JWFU8rxVAQ"
    //       description="CSS Variables|Toggle"
    //       view="1.7k views"
    //     />

    //     <Card
    //       image="https://i.ytimg.com/vi/dCz9OdZWtIQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0k5WoQ0SaLlDBSdC6JWFU8rxVAQ"
    //       description="CSS Variables|Toggle"
    //       view="1.7k views"
    //     />

    //     <Card
    //       image="https://i.ytimg.com/vi/dCz9OdZWtIQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0k5WoQ0SaLlDBSdC6JWFU8rxVAQ"
    //       description="CSS Variables|Toggle"
    //       view="1.7k views"
    //     />
    //   </div>
    // </div>

    // <div className="container">
    //   <Slider heading="rahul" para="Hi i am rahul" content="My name is rahul" />
    // </div>
  );
}

export default App;
