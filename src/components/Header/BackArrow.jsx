import React from "react";
import Svg, { Path } from "react-native-svg";
import styled from "styled-components";

const BackArrow = ({ navigation }) => {
  return (
    <HeaderView>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <Path
            d="M24.904 9.03198C25.796 9.90398 25.866 11.118 24.904 12.184L17.41 20L24.904 27.816C25.866 28.882 25.796 30.098 24.904 30.964C24.014 31.836 22.51 31.78 21.674 30.964C20.838 30.152 12.67 21.574 12.67 21.574C12.4583 21.3697 12.2899 21.1249 12.1749 20.8541C12.0599 20.5833 12.0006 20.2922 12.0006 19.998C12.0006 19.7038 12.0599 19.4126 12.1749 19.1419C12.2899 18.8711 12.4583 18.6263 12.67 18.422C12.67 18.422 20.838 9.84798 21.674 9.03198C22.51 8.21398 24.014 8.15998 24.904 9.03198Z"
            fill="black"
          />
        </Svg>
      </BackButton>
    </HeaderView>
  );
};

export default BackArrow;

const HeaderView = styled.View`
  justify-content: center;
  
  align-items: flex-start;
  padding-top: 50px;
`;

const BackButton = styled.Pressable`
  margin-left: 12px;
`;
