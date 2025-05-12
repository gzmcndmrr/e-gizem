import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  SignUpScreen: undefined;
  ProfileScreen: undefined;
  // Diğer ekranları da buraya ekleyebilirsiniz
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>; 