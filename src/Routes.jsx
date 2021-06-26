import React from 'react';
import { NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Join from "./components/Join/Join";
import Schedule from "./components/Schedule/Schedule";
import { StatusBar } from 'expo-status-bar';

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#F8F8F8'
    },
  };

const Stack = createStackNavigator();

{/* [HOME] -> [Schedule]
              [Join] 

*/}

export const Routes = ({}) => {
    return (
        <>
    <NavigationContainer theme={MyTheme}>
         <Stack.Navigator screenOptions={{header: () => null}} initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home}/> 
            <Stack.Screen name="Register" component={Schedule}/> 
            <Stack.Screen name="Join" component={Join}/>
        </Stack.Navigator>

    </NavigationContainer>
    
    <StatusBar style="dark"/>
       </>
    );
}



