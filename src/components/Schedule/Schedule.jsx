import React, { useState } from "react";
import styled from "styled-components";
import BackArrow from "../Header/BackArrow";
import { Button, View } from "react-native";
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
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      </View>
      
    </>
  );
};

export default Schedule;

const Container = styled.View`
  flex: 1; /* takes up whole screen */
  justify-content: center; /* horizontally centers */
  align-items: center; /* verticall centers */
`;

const TextI = styled.Text`
  font-size: 30px;
`;
