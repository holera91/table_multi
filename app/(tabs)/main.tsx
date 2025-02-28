import { StyleSheet, View, Dimensions, ImageBackground, Platform } from 'react-native';
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
      {Platform.OS === 'web' ? (
        <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(255,255,255,0.7)' }]} />
      ) : (
        <BlurView intensity={50} style={StyleSheet.absoluteFill} />
      )}
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Вчимо Таблицю Множення разом!</ThemedText>
        
        {Platform.OS === 'web' ? (
          <iframe
            src="https://lottie.host/embed/6667a089-b55a-49e9-be36-3fb82142e693/1Fq8Zrv4qj.json"
            style={{
              width: width * 0.7,
              height: width * 0.7,
              border: 'none',
              background: 'transparent',
            }}
          />
        ) : (
          <LottieView
            source={require('@/assets/animations/math.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        )}
        
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