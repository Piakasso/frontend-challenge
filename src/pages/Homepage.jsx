import React, { useEffect, useState } from "react";
import env from "react-dotenv";
import styled from "styled-components";

import { CardsList } from "../components/CardsList";
import SingleCard from "../components/SingleCard";

const apiKey = env.API_KEY;

const HomePageEl = styled.main`
  padding-top: 52px;
  text-align: center;

  & .textLoading {
    display: block;
    padding: 20px 0;
  }
`;

const Homepage = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);

  const fetchData = () => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=20&page=${page}`, {
      headers: { "x-api-key": apiKey },
    }).then((res) =>
      res.json().then((data) => {
        const updatedData = data.map((item) => ({ ...item, checked: false }));
        setItems((prevItems) => [...prevItems, ...updatedData]);
        setPage((prevPage) => prevPage + 1);
      })
    );
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <HomePageEl className="container">
      <CardsList>
        {items.map((item) => (
          <SingleCard key={item.id} item={item} />
        ))}
      </CardsList>
      <span className="textLoading">... загружаем котиков ...</span>
    </HomePageEl>
  );
};

export default Homepage;
