import React, { useState } from "react";
import styled from "styled-components";
import BackArrow from "../Header/BackArrow";
import { Button, TextInput, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Schedule = ({ navigation }) => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <>
      <BackArrow navigation={navigation} />
      <View>
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      </View>
        <Container> 
        <PickDateText>Pick a couple dates 🗓</PickDateText>
        <Block><Center title="+" onPress={showDatePicker}/></Block>
        <Block/>
      </Container>

    </>
    
  );
};

export default Schedule;

const PickDateText = styled.Text`
  font-weight: 800;
  font-size: 24px;
  position: absolute;
  text-align: center;
  top: 80px;
  left: 0px;
  right: 0px;
  
`;
const Container = styled.View`
  flex: 1; /* takes up whole screen */
  justify-content: space-evenly; 
  align-items: center;
  flex-direction: row;
  margin-bottom: 150px;
`;
const Center = styled.Button`  
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 900; /* super bold */
  font-size: 26px;
  background-color: gray;
  width: 10px;
  height: 10px;
`;
const Block = styled.View`
  width: 160px;
  height: 160px;
  background-color: white;
  justify-content: center;
 align-items: center;
`;