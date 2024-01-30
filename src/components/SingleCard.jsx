import React, { useContext, useState } from "react";
import styled from "styled-components";

import heart from "../assets/heart.svg";
import fillHeart from "../assets/fillheart.svg";

import { FavouriteContext } from "../providers/FavouriteProvider";

const SingleCardEl = styled.div`
  position: relative;
  transition: all 100ms linear;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 5px 0 rgba(0, 0, 0, 0.24),
      0 9px 18px 0 rgba(0, 0, 0, 0.18);
  }
  & .cardImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & .heart {
    position: absolute;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

const SingleCard = ({ item }) => {
  const { id, url, checked } = item;
  const [isHoveredCard, setIsHoveredCard] = useState(checked);
  const [isChecked, setIsChecked] = useState(checked);

  const { list, addFavourite, deleteFavourite } = useContext(FavouriteContext);

  const toggleFavourite = () => {
    if (list.some((item) => item.id === id)) {
      setIsChecked(false);
      deleteFavourite(id);
    } else {
      setIsChecked(true);
      addFavourite({ ...item, checked: true });
    }
  };

  return (
    <SingleCardEl
      onMouseEnter={() => setIsHoveredCard(true)}
      onMouseLeave={() => {
        if (isChecked) {
          return;
        } else {
          setIsHoveredCard(false);
        }
      }}
    >
      <img src={url} alt={id} className="cardImg" />
      {isHoveredCard && (
        <img
          className="heart"
          src={isChecked ? fillHeart : heart}
          alt=""
          onClick={toggleFavourite}
        />
      )}
    </SingleCardEl>
  );
};

export default SingleCard;
