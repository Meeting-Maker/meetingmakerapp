import React from "react";
import styled from "styled-components";
import BackArrow from "../Header/BackArrow";

const Schedule = ({ navigation }) => {
  return (
    <>
      <BackArrow navigation={navigation} />
      <Container>
        <TextI>❗️</TextI>
      </Container>
    </>
  );
};

export default Schedule;

const Container = styled.View`
  background-color: white;
  flex: 1; /* takes up whole screen */
  justify-content: center; /* horizontally centers */
  align-items: center; /* verticall centers */
`;

const TextI = styled.Text`
  font-size: 30px;
`;
