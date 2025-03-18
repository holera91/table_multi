import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { router } from 'expo-router';

export default function TestTemplate() {
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
            <ThemedText style={styles.textStyle}>Цей текст у верхньому контейнері</ThemedText>
          </View>
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
    height: '7%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFB6C1',
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
    color: '#800080',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    padding: 5,
    borderRadius: 25,
    height: '100%',
    width: '50%',
    marginEnd: '25%',
    maxWidth: '70%',
  },
  textStyle: {
    color: '#800080',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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