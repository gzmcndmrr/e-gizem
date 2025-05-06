import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'
import { s, vs } from 'react-native-size-matters'
import AppText from '../AppText'

interface ButtonProps {
  onPress: () => void
  title: string
  backgroundColor?: string
  textColor?: string
  style?: any
  styleTitle?: any
}

const Button = ({ onPress, title, backgroundColor = colors.primary, textColor = colors.white, style, styleTitle }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.button, { backgroundColor: backgroundColor }, style]}>
      <AppText variant="bold" style={[styles.title, { color: textColor }, styleTitle]}>{title}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: vs(40),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: s(16),
    color: colors.white,
  }
})
export default Button