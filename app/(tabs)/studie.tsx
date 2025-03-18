import { StyleSheet, TouchableOpacity, View, ImageBackground, Dimensions } from 'react-native';
import { useState } from 'react';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

type OperationType = 'multiplication' | 'division';

export default function StudieScreen() {
  const [operation, setOperation] = useState<OperationType>('multiplication');

  const toggleOperation = () => {
    setOperation(prev => prev === 'multiplication' ? 'division' : 'multiplication');
  };

  return (
    <ImageBackground 
      source={require('@/assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <BlurView intensity={50} style={StyleSheet.absoluteFill} />
      <ThemedView style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.push('/')}
          >
            <ThemedText style={styles.backButtonText}>
              Назад
            </ThemedText>
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

        {/* New Test Button */}
        <TouchableOpacity 
          style={styles.testButton}
          onPress={() => router.push('/(tabs)/testTemplate')}
        >
          <ThemedText style={styles.testButtonText}>
            Тест
          </ThemedText>
        </TouchableOpacity>

        {/* Numbers Grid */}
        <View style={styles.numbersGrid}>
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
                <View style={styles.starsContainer}>
                  {[1, 2, 3].map((star) => (
                    <ThemedText key={star} style={styles.star}>⭐</ThemedText>
                  ))}
                </View>
              </TouchableOpacity>
            ))}
          </View>
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
    paddingTop: 80,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
    paddingHorizontal: 5,
  },
  backButton: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8A2BE2',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFB6C1',
    borderRadius: 25,
    padding: 5,
    width: '70%',
    marginLeft: '5%',
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
  testButton: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  testButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8A2BE2',
  },
  numbersGrid: {
    flex: 1,
    backgroundColor: '#98FB98',
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    right: '5%',
    height: '80%',
    justifyContent: 'center',
    borderRadius: 20,
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
    justifyContent: 'center',
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
    fontSize: 48,
    fontWeight: 'bold',
    color: '#8A2BE2',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    lineHeight: 48,
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 4,
    marginTop: 8,
  },
  star: {
    fontSize: 24,
    opacity: 0.5,
  },
}); 