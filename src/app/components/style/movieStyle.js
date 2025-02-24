import styled from "styled-components";

export const MovieBoardBorder = styled.div`
  margin: 15px;
  padding-bottom: 15px;
  border: solid 1px #2d435d;
  border-radius: 8px;
  background-color: #1f2936;
  color: #e0e5ec;
  font: 16px "Montserrat", sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 350px;
  width: 800px;
`;

export const MovieBoard = styled.div`
  display: flex;
  margin-bottom: 25px;
  gap: 20px;
`;

export const MovieMainImage = styled.img`
  height: 240px;
  width: 160px;
  border-radius: 8px;
  margin-top: 10px;
  margin: 15px;
`;

export const AllInfo = styled.ul`
  line-height: 1.7;
  color: #bac7e2;
  border: solid 1px #8499c3;
  border-radius: 3%;
  padding: 2px;
  margin-top: 10px;
  background-color: #18202a;
`;

export const MovieTitle = styled.li`
  margin-bottom: 12px;
  font-size: 32px;
  color: #8499c3;
`;

export const MovieInfoStatic = styled.li`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const MovieInfo = styled.span`
  margin-left: 12px;
  font-style: italic;
`;

export const MovieInfoRate = styled.span`
  margin: 40px;
  font-size: 20px;
`;

export const ButtonLink = styled.button`
  margin-right: 420px;
`;
