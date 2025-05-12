import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppColors } from '../../styles/colors';

type Slide = {
  key: string;
  title: string;
  text: string;
  image: any;
  backgroundColor: string;
};

type OnboardingScreenProps = {
  navigation: StackNavigationProp<any>;
};

const slides: Slide[] = [
  {
    key: 'one',
    title: 'Hoş Geldin!',
    text: 'Uygulamamıza hoş geldiniz. Size özel birçok özellik sunuyoruz.',
    image: require('../../assets/images/on-board1.png'),
    backgroundColor: AppColors.pink,
  },
  {
    key: 'two',
    title: 'Kolay Kullanım',
    text: 'Arayüzümüz kullanıcı dostudur ve kolayca gezinebilirsiniz.',
    image: require('../../assets/images/on-board2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Başlayalım!',
    text: 'Haydi uygulamayı keşfetmeye başlayalım!',
    image: require('../../assets/images/on-board3.png'),
    backgroundColor: '#22bcb5',
  },
];

const SlideItem = ({ item }: { item: Slide }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [item.key]);

  return (
    <Animated.View 
      style={[
        styles.slide, 
        { 
          backgroundColor: item.backgroundColor,
          opacity: fadeAnim,
          transform: [{
            translateX: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 0],
            }),
          }],
        }
      ]}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </Animated.View>
  );
};

export default function OnboardingScreen({ navigation }: OnboardingScreenProps) {
  const _renderItem = ({ item }: { item: Slide }) => {
    return <SlideItem item={item} />;
  };

  const _onDone = () => {
    navigation.replace('SignInScreen');
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
      showSkipButton
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      renderNextButton={() => (
        <Text style={styles.buttonText}>İleri</Text>
      )}
      renderPrevButton={() => (
        <Text style={styles.buttonText}>Geri</Text>
      )}
      renderDoneButton={() => (
        <Text style={styles.buttonText}>Başla</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
});
