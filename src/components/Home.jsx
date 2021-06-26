import React from "react";
import styled from "styled-components";

const Home = ({ navigation }) => {
  return (
    <>
      <MeetingMakerTextView>
        <MeetingMakerText>meeting <MeetingMakerInnerText>maker</MeetingMakerInnerText></MeetingMakerText>
      </MeetingMakerTextView>
      <HomeView>
        <ScheduleButton
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <ButtonText>schedule</ButtonText>
        </ScheduleButton>
        <JoinButton
          onPress={() => {
            navigation.navigate("Join");
          }}
        >
          <ButtonText>join</ButtonText>
        </JoinButton>


      </HomeView>
      
      <PrivacyText>By continuing you agree to our Privacy Policy & terms of Service</PrivacyText>

    </>
  );
};

export default Home;


const PrivacyText = styled.Text`
    position: absolute; 
    bottom: 40px;
    padding-right: 50px;
    padding-left: 50px;
    text-align: center;
    color: #9A9A9D;
    font-weight: bold;
    
`;
const MeetingMakerText = styled.Text`
  font-weight: bold;
  font-size: 32px;
`;

const MeetingMakerInnerText = styled.Text`
  color: #00C7BB;
`;
const MeetingMakerTextView = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

// pushes buttons to the bottom
const HomeView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 140px;
`;

// button shape
const ScheduleButton = styled.Pressable`
  border-radius: 8px;
  padding: 6px;
  height: 55px; /* Button size */
  width: 70%;
  justify-content: center; /* Center button */
  align-items: center;
  background-color: black;
  margin-top: 25px; /* This creates space bettween buttons */
`;
// button shape
const JoinButton = styled.Pressable`
  border-radius: 8px;
  padding: 6px;
  height: 55px; /* Button size */
  width: 70%;
  justify-content: center; /* Center button */
  align-items: center;
  background-color: #00C7BB;
  margin-top: 25px; /* This creates space bettween buttons */
`;
