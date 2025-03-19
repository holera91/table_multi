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
          <ThemedText>Середній контейнер</ThemedText>
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
    width: '95%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98FB98',
    marginVertical: '3%',
  },
}); 