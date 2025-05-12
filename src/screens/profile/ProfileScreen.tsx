import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppSaveView from '../../components/views/AppSaveView'
import HomeHeader from '../../components/headers/HomeHeader'
import { AppColors } from '../../styles/colors'
import { s } from 'react-native-size-matters'
import AppButton from '../../components/buttons/AppButton'
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from '../../types/navigation';
import { CommonActions } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp>()

  const handleLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'AuthStack' }],
      })
    );
  };

  return (
    <AppSaveView>
      <HomeHeader />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <AppButton 
           title="Log out"
           backgroundColor={AppColors.pink}
           onPress={handleLogout}
           />
        </View>
      </View>
    </AppSaveView>
  )
}


export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    padding:s(10),
    width:"100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileContainer:{
    backgroundColor:AppColors.whiteGray,
    width: '100%',
    alignItems: 'center'
  }
})