import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { router } from 'expo-router';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const numberFontSize = Math.min(screenWidth, screenHeight) * 0.15;
const buttonFontSize = Math.min(screenWidth, screenHeight) * 0.04;
const toggleFontSize = Math.min(screenWidth, screenHeight) * 0.045;
const starFontSize = Math.min(screenWidth, screenHeight) * 0.06;

export default function TestTemplate() {
  const [operation, setOperation] = useState<'multiplication' | 'division'>('multiplication');

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
          <View style={styles.toggleContainer}>
            <TouchableOpacity 
              style={[
                styles.toggleButton,
                operation === 'multiplication' && styles.toggleButtonActive
              ]}
              onPress={() => setOperation('multiplication')}
            >
              <ThemedText style={[
                styles.toggleText,
                operation === 'multiplication' && styles.toggleTextActive
              ]}>
                Множення
              </ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                styles.toggleButton,
                operation === 'division' && styles.toggleButtonActive
              ]}
              onPress={() => setOperation('division')}
            >
              <ThemedText style={[
                styles.toggleText,
                operation === 'division' && styles.toggleTextActive
              ]}>
                Ділення
              </ThemedText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.numbersContainer}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <TouchableOpacity 
                key={num} 
                style={styles.numberContainer}
                onPress={() => router.push({
                  pathname: '/testReady',
                  params: { number: num, operation: operation }
                })}
              >
                <ThemedText style={styles.number}>{num}</ThemedText>
                <View style={styles.starsWrapper}>
                  <View style={styles.starsContainer}>
                    {[1, 2, 3].map((star) => (
                      <ThemedText key={star} style={styles.star}>⭐</ThemedText>
                    ))}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
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
    alignItems: 'center',
    marginTop: '12%',
  },
  topContainer: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: '25%',
  },
  backButton: {
    backgroundColor: '#FFD700',
    paddingVertical: '1%',
    paddingHorizontal: '5%',
    borderRadius: 20,
    marginRight: 'auto',
    width: '25%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#8A2BE2',
    fontSize: buttonFontSize,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFB6C1',
    borderRadius: 25,
    padding: '1%',
    width: '60%',
    marginEnd: '22%',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: '2%',
    alignItems: 'center',
    borderRadius: 20,
  },
  toggleButtonActive: {
    backgroundColor: '#8A2BE2',
  },
  toggleText: {
    fontSize: toggleFontSize,
    fontWeight: 'bold',
    color: '#8A2BE2',
  },
  toggleTextActive: {
    color: '#FFD700',
  },
  middleContainer: {
    width: '90%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 15,
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '4%',
    paddingHorizontal: '1%',
    marginTop: '5%',
  },
  numberContainer: {
    alignItems: 'center',
    width: '28%',
    height: '28%',
    backgroundColor: '#FFD700',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#8A2BE2',
    justifyContent: 'flex-end',
    padding: '2%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: '4%',
  },
  number: {
    fontSize: numberFontSize,
    fontWeight: 'bold',
    color: '#8A2BE2',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    lineHeight: numberFontSize,
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  starsWrapper: {
    marginTop: '2%',
    marginBottom: '0.5%',
    borderWidth: 1,
    borderColor: '#8A2BE2',
    borderRadius: 10,
    padding: '1%',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 0,
  },
  star: {
    fontSize: starFontSize,
    opacity: 0.5,
  },
}); 