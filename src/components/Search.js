import React, { useState, useEffect } from "react";
import wikipedia from "../wikipedia";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await wikipedia.get("", {
        params: { srsearch: term },
      });

      setResults(data.query.search);
    };

    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          <div className="right floated content">
            <a
              className="ui button"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
            >
              Go
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Start typing to start...</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
