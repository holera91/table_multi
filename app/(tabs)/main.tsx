import { StyleSheet, View, Dimensions, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';
import LottieView from 'lottie-react-native';

import { NavigationButton } from '@/components/NavigationButton';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const { width } = Dimensions.get('window');

export default function MainScreen() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ImageBackground 
      source={require('@/assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <BlurView intensity={50} style={StyleSheet.absoluteFill} />
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Вчимо Таблицю Множення разом!</ThemedText>
        
        <LottieView
          source={require('@/assets/animations/math.json')}
          autoPlay
          loop
          style={styles.animation}
        />
        
        <View style={styles.buttonContainer}>
          <NavigationButton title="Вчимось" route="/(tabs)/studie" />
          <NavigationButton title="Перевіряємо" route="/(tabs)/testing" />
        </View>
      </ThemedView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 50,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 32,
  },
  animation: {
    width: width * 0.7,
    height: width * 0.7,
    marginVertical: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 20,
  },
}); 