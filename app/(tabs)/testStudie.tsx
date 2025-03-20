import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { router } from 'expo-router';

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
                  pathname: '/ready',
                  params: { number: num, operation }
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
    color: '#800080',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFB6C1',
    borderRadius: 25,
    padding: 5,
    width: '54%',
    marginEnd: '22%',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  toggleButtonActive: {
    backgroundColor: '#8A2BE2',
  },
  toggleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8A2BE2',
  },
  toggleTextActive: {
    color: '#FFD700',
  },
  middleContainer: {
    width: '90%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginVertical: '3%',
    borderRadius: 15,
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 5,
  },
  numberContainer: {
    alignItems: 'center',
    width: '28%',
    aspectRatio: 1,
    backgroundColor: '#FFD700',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#8A2BE2',
    justifyContent: 'flex-end',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 15,
  },
  number: {
    fontSize: 76,
    fontWeight: 'bold',
    color: '#8A2BE2',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    lineHeight: 76,
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  starsWrapper: {
    marginTop: 8,
    marginBottom: 2,
    borderWidth: 1,
    borderColor: '#8A2BE2',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 0,
  },
  star: {
    fontSize: 24,
    opacity: 0.5,
  },
}); 