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
        <TextInputBox source={require('./CodeTextBoxWhite.png')}> 
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
  position:relative;
  bottom: 30px;
 
`;
const TextInputBox = styled.ImageBackground`
 width: 326px;
 height: 92px;
 justify-content: center;
 align-items: center;
 
`;

const TextInput = styled.TextInput`  
  justify-content: center;
  align-items: center;
  margin-bottom: 17px;
  text-align: center;
  font-weight: 900; /* super bold */
  font-size: 26px;
`;

const TextInputView = styled.View`
  flex: 1; /* takes up whole screen */
  justify-content: center; /* horizontally centers */
  align-items: center; /* verticall centers */
  padding-bottom: 350px;
`;
