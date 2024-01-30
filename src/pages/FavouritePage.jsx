import React, { useContext } from "react";
import { FavouriteContext } from "../providers/FavouriteProvider";
import styled from "styled-components";
import { CardsList } from "../components/CardsList";
import SingleCard from "../components/SingleCard";

const FavouritePageEl = styled.main`
  padding-top: 52px;
  p {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
`;

const FavouritePage = () => {
  const { list } = useContext(FavouriteContext);
  return (
    <FavouritePageEl className="container">
      {list.length < 1 ? (
        <p>Неужели у тебя нет любимых котиков =( </p>
      ) : (
        <CardsList>
          {list.map((item) => (
            <SingleCard item={item} key={item.id} />
          ))}
        </CardsList>
      )}
    </FavouritePageEl>
  );
};

export default FavouritePage;
