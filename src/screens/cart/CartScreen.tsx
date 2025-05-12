import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSaveView from '../../components/views/AppSaveView'
import HomeHeader from '../../components/headers/HomeHeader'
import EmptyCart from './EmptyCart'
import CartItem from '../../components/cart/CartItem'
import TotalsView from '../../components/cart/TotalsView'
import { products } from '../../data/products'
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
import AppButton from '../../components/buttons/AppButton'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
  const navigation = useNavigation()
  
  return (
    <AppSaveView >
      <HomeHeader />
      {/* <EmptyCart /> */}
      <View style={{paddingHorizontal: sharedPaddingHorizontal, flex:1}}>


      <FlatList 
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          return <CartItem {...item}/>
        }}
        showsVerticalScrollIndicator={false}
      />
      
      <TotalsView itemsPrice={5000} orderTotal={5025}/>
      <AppButton title='Continue' onPress={() => navigation.navigate("CheckoutScreen")}/>
      </View>
    </AppSaveView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})