import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import LottieView from 'lottie-react-native';

import { NavigationButton } from '@/components/NavigationButton';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CommonStyles } from '@/constants/Styles';

const { width } = Dimensions.get('window');

export default function MainScreen() {
  return (
    <View style={CommonStyles.webWrapper}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title as any}>Вчимо Таблицю Множення разом!</ThemedText>
        
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
            style={styles.animation as any}
          />
        )}
        
        <View style={styles.buttonContainer as any}>
          <NavigationButton title="Вчимось" route="/(tabs)/studie" />
          <NavigationButton title="Перевіряємо" route="/(tabs)/testing" />
        </View>
      </ThemedView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...CommonStyles.container,
    alignItems: 'center',
    justifyContent: 'center',
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