import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { AppColors } from '../../styles/colors'
import { s, vs } from 'react-native-size-matters'
import { IMAGES } from '../../constants/images-paths'
import { MaterialIcons } from '@expo/vector-icons'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="menu" size={24} color="black" />
      <Image source={IMAGES.appLogo} />
      <Image source={IMAGES.profileIcon}/>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:s(10)
    },
})