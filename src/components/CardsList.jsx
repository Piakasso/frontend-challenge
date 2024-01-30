import styled from "styled-components";

export const CardsList = styled.div`
  display: grid;
  gap: 47px;

  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-auto-rows: 225px;
`;
