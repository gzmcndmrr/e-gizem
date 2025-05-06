import React from 'react';
import AppText from './src/components/AppText';
import AppSaveView from './src/components/views/AppSaveView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import Button from './src/components/buttons/Button';
import AppTextInput from './src/components/inputs/AppTextInput';

export default function App() {
  return (
    <>
    <FlashMessage position="top" />
     <AppSaveView>
      <AppTextInput value={''} onChangeText={()=>{}} placeholder="Enter your name" />
      <Button onPress={() => {
        showMessage({
          message: "Hello",
          type: "success",
        });
      
      }}   backgroundColor='red' title="Click me" />
      <AppText variant="bold">Hello</AppText>
      <AppText variant="medium" onPress={
        () => {
          showMessage({
            message: "Hello",
            type: "success",
          });
        }
      }>Hello</AppText>
    </AppSaveView>
    </>
   
  );
}