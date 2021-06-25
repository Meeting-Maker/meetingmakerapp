import React, { useState } from "react";
import styled from "styled-components";
import BackArrow from "../Header/BackArrow";

const Join = ({ navigation }) => {
  const [code, setCode] = useState("");

  return (
    <>
      <BackArrow navigation={navigation}/>
      
      <TextInputView>
        <EnterACodeText>enter a code 🔐</EnterACodeText>
        <TextInputBox source={require('./CodeTextBox.png')}> 
        <TextInput
          returnKeyType="go"
          autoCorrect={false}
          autoFocus={true}
          placeholder="XXXXX"
          onChangeText={(val) => setCode(val)}
          maxLength={6}
        ></TextInput>
        </TextInputBox>
      </TextInputView>
    </>
  );
};

export default Join;

const EnterACodeText = styled.Text`
  font-weight: 800;
  font-size: 24px;
  position:absolute;
  top: 110px;
`;
const TextInputBox = styled.ImageBackground`
 width: 375px;
 height: 225px;
 justify-content: center;
 align-items: center;
 
`;

const TextInput = styled.TextInput`  
  justify-content: center;
  align-items: center;
  margin-bottom: 105px;
  text-align: center;
  font-weight: 900; /* super bold */
  font-size: 24px;
`;

const TextInputView = styled.View`
  flex: 1; /* takes up whole screen */
  justify-content: center; /* horizontally centers */
  align-items: center; /* verticall centers */
  padding-bottom: 350px;
`;
