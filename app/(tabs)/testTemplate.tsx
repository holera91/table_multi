import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function TestTemplate() {
  return (
    <ImageBackground 
      source={require('@/assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <ThemedText>Верхній контейнер</ThemedText>
        </View>
        <View style={styles.middleContainer}>
          <ThemedText>Середній контейнер</ThemedText>
        </View>
        <View style={styles.bottomContainer}>
          <ThemedText>Нижній контейнер</ThemedText>
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
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB6C1',
    marginTop: '1%',
  },
  middleContainer: {
    width: '95%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98FB98',
    marginVertical: '3%',
  },
  bottomContainer: {
    width: '95%',
    height: '6%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    marginBottom: '3%',
  },
}); 