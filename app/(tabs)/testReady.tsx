import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { router } from 'expo-router';

export default function TestTemplate() {
  const [countdown, setCountdown] = useState(9);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ImageBackground 
      source={require('@/assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
            <ThemedText style={styles.buttonText}>Назад</ThemedText>
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <ThemedText style={styles.textStyle}>Повторимо табличку</ThemedText>
          </View>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.yellowContainer}>
            <ThemedText style={styles.timerText}>{countdown}</ThemedText>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <ThemedText>Готово!</ThemedText>
        </View>
      </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8%',
  },
  topContainer: {
    width: '95%',
    height: '7%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: '1%',
  },
  backButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 'auto',
    width: '12%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#8A2BE2',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB6C1',
    padding: 5,
    borderRadius: 25,
    height: '100%',
    width: '50%',
    marginEnd: '25%',
    maxWidth: '70%',
  },
  textStyle: {
    color: '#8A2BE2',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  middleContainer: {
    width: '95%',
    height: '75%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#98FB98',
    marginVertical: '3%',
  },
  yellowContainer: {
    height: '15%',
    width: '100%',
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 45,
    color: '#8A2BE2',
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: '35%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    marginBottom: '5%',
    borderRadius: 25,
  },
}); 