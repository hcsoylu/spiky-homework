import React from "react";
import styled from "styled-components";

const Search = ({ input, setInput, getWeather }) => {
  return (
    <SearchBox>
      <div className="wrapper">
        <input
          type="text"
          placeholder="Search City"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <img src="/search.svg" alt="" onClick={getWeather} />
      </div>
    </SearchBox>
  );
};

export default Search;

const SearchBox = styled.div`
  margin-top: 57px;
  display: flex;
  justify-content: center;

  .wrapper {
    width: 500px;
    height: 60px;
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    justify-content: space-between;

    img {
      margin-right: 20px;
      cursor: pointer;
    }

    input {
      border: none;
      height: 100%;
      outline: none;
      background-color: transparent;
      font-size: 28px;

      &::placeholder {
        font-size: 28px;
      }
    }
  }
`;
