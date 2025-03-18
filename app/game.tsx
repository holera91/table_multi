import React from 'react';
import { StyleSheet, TouchableOpacity, View, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';
import { BlurView } from 'expo-blur';
import { router, useLocalSearchParams, Stack } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

type OperationType = 'multiplication' | 'division';

export default function GameScreen() {
  const { number, operation } = useLocalSearchParams<{ number: string; operation: OperationType }>();
  const [timeLeft, setTimeLeft] = useState(10);
  const [showTable, setShowTable] = useState(true);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowTable(false);
    }
  }, [timeLeft]);

  const generateTable = () => {
    const num = parseInt(number);
    const rows = [];
    
    for (let i = 1; i <= 10; i++) {
      if (operation === 'multiplication') {
        rows.push(`${num} × ${i} = ${num * i}`);
      } else {
        rows.push(`${num * i} ÷ ${num} = ${i}`);
      }
    }
    return rows;
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
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
              onPress={() => router.push('/studie')}
            >
              <ThemedText style={styles.backButtonText}>
                Назад
              </ThemedText>
            </TouchableOpacity>
            <View style={styles.toggleContainer}>
              <ThemedText style={styles.toggleText}>
                {operation === 'multiplication' ? 'Таблиця множення' : 'Таблиця ділення'} на {number}
              </ThemedText>
            </View>
          </View>

          <View style={styles.numbersGrid}>
            <View style={styles.timerContainer}>
              <ThemedText style={styles.timer}>{timeLeft}с</ThemedText>
            </View>
            <View style={styles.numbersContainer}>
              {showTable && generateTable().map((row, index) => (
                <View key={index} style={styles.numberContainer}>
                  <ThemedText style={styles.number}>{row}</ThemedText>
                </View>
              ))}
            </View>
          </View>

          <TouchableOpacity 
            style={styles.nextButton}
            onPress={() => router.push('/studie')}
          >
            <ThemedText style={styles.nextButtonText}>
              Вперед!
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ImageBackground>
    </>
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
    paddingTop: '10%',
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '8%',
    paddingHorizontal: 5,
    backgroundColor: '#4169E1',
    borderRadius: 20,
  },
  backButton: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: '100%',
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
  toggleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8A2BE2',
    textAlign: 'center',
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 10,
  },
  timer: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  numbersGrid: {
    flex: 1,
    backgroundColor: '#98FB98',
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    right: '5%',
    height: '75%',
    borderRadius: 20,
    paddingVertical: '2%',
  },
  numbersContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 5,
    flex: 1,
    backgroundColor: '#FFD700',
    borderRadius: 15,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  numberContainer: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    padding: 8,
  },
  number: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8A2BE2',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    lineHeight: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  nextButton: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    paddingVertical: '2%',
    paddingHorizontal: 30,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: '5%',
    height: '7%',
    justifyContent: 'center',
  },
  nextButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8A2BE2',
  },
}); 