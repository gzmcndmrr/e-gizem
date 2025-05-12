import { ActivityIndicator, StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import React from 'react';
import MainAppStack from './src/navigation/MainAppStack';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const [fontsLoaded]  = useFonts({
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf")
  })

  if(!fontsLoaded) {
    return <ActivityIndicator size={"large"}/>
  }

  return (
    <>
    <NavigationContainer>
      <FlashMessage position={"top"}/>
      <MainAppStack />
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
