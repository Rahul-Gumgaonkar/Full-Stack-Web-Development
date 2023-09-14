import React, { useEffect, useRef, useState } from "react";
import News from "./News";
import "./NewsApp.css";

function NewsApp() {
  const apiKey = `1c30091e98ae4eb78bbaaacfa1a4b227`;
  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState("tesla");
  const queryInputRef = useRef(null);
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-07-14&sortBy=publishedAt&apiKey=1c30091e98ae4eb78bbaaacfa1a4b227`;

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();

      setNewsList(jsonData.articles);
    } catch (e) {
      console.log("error occur", e);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const queryValue = queryInputRef.current.value;
    setQuery(queryValue);
  }

  return (
    <div className="news-app">
      <h1>Daily News</h1>
      <form onSubmit={handleSubmit}>
        <input className="query-input" type="text" ref={queryInputRef} />
        <input
          className="btn-submit"
          onClick={handleSubmit}
          type="submit"
          value="Submit"
        />
      </form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,30%)",
          justifyContent: "space-between",
          rowGap: "20px",
        }}
      >
        {newsList.map((news) => {
          return <News key={news.url} news={news} />;
        })}
      </div>
    </div>
  );
}

export default NewsApp;
