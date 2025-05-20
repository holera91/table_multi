import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { router, useLocalSearchParams } from 'expo-router';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const buttonFontSize = Math.min(screenWidth, screenHeight) * 0.04;
const textFontSize = Math.min(screenWidth, screenHeight) * 0.045;
const timerFontSize = Math.min(screenWidth, screenHeight) * 0.12;
const tableFontSize = Math.min(screenWidth, screenHeight) * 0.06;

export default function TestTemplate() {
  const [countdown, setCountdown] = useState(15);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const params = useLocalSearchParams();
  const number = Number(params.number);
  const operation = params.operation as 'multiplication' | 'division';

  useEffect(() => {
    if (!isTimerActive) return;

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsTimerActive(false);
          router.push({
            pathname: '/testGame',
            params: { number, operation }
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerActive]);

  const generateTable = () => {
    const rows = [];
    for (let i = 1; i <= 9; i++) {
      if (operation === 'multiplication') {
        rows.push(`${number} × ${i} = ${number * i}`);
      } else {
        rows.push(`${number * i} ÷ ${number} = ${i}`);
      }
    }
    return rows;
  };

  const tableRows = generateTable();

  const handleReadyPress = () => {
    setIsTimerActive(false);
    router.push({
      pathname: '/testGame',
      params: { number, operation }
    });
  };

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
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.textContainer}>
            <ThemedText style={styles.textStyle}>Повторимо табличку</ThemedText>
          </View>
          <View style={styles.yellowContainer}>
            <ThemedText style={styles.timerText}>{countdown}</ThemedText>
          </View>
          <View style={styles.tableContainer}>
            {tableRows.map((row, index) => (
              <ThemedText key={index} style={styles.tableText}>{row}</ThemedText>
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.bottomContainer} onPress={handleReadyPress}>
          <ThemedText style={styles.buttonText}>Готово!</ThemedText>
        </TouchableOpacity>
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
    justifyContent: 'space-between',
    paddingBottom: '8%',
  },
  topContainer: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: '2%',
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
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB6C1',
    padding: '1%',
    borderRadius: 25,
    height: '10%',
    width: '100%',
    marginBottom: '5%',
  },
  textStyle: {
    color: '#8A2BE2',
    fontSize: textFontSize,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  middleContainer: {
    flex: 1,
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 15,
    marginBottom: '2%',
  },
  yellowContainer: {
    height: '10%',
    width: '100%',
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#8A2BE2',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  timerText: {
    fontSize: timerFontSize,
    color: '#8A2BE2',
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    lineHeight: timerFontSize,
    textAlignVertical: 'center',
    includeFontPadding: false,
    paddingVertical: '2%',
  },
  bottomContainer: {
    width: '35%',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#8A2BE2',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tableContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFB6C1',
    borderRadius: 15,
    padding: '3%',
    marginTop: '5%',
    justifyContent: 'space-between',
  },
  tableText: {
    fontSize: tableFontSize,
    color: '#8A2BE2',
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 