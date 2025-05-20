import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { router, useLocalSearchParams } from 'expo-router';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const buttonFontSize = Math.min(screenWidth, screenHeight) * 0.04;
const textFontSize = Math.min(screenWidth, screenHeight) * 0.045;
const timerFontSize = Math.min(screenWidth, screenHeight) * 0.12;
const tableFontSize = Math.min(screenWidth, screenHeight) * 0.06;

type Answer = {
  value: number;
  isCorrect: boolean;
};

export default function TestGame() {
  const params = useLocalSearchParams();
  const number = Number(params.number);
  const operation = params.operation as 'multiplication' | 'division';
  
  const [countdown, setCountdown] = useState(10);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [questions, setQuestions] = useState<number[]>([]);

  useEffect(() => {
    if (gameCompleted) {
      router.push('/testStudie');
      return;
    }

    // Генеруємо масив чисел від 1 до 10
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    // Дублюємо кожне число 2 рази
    const duplicatedNumbers = numbers.flatMap(num => [num, num]);
    // Перемішуємо масив
    const shuffledNumbers = duplicatedNumbers.sort(() => Math.random() - 0.5);
    setQuestions(shuffledNumbers);

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleWrongAnswer();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameCompleted]);

  useEffect(() => {
    if (questions.length > 0) {
      generateAnswers();
    }
  }, [currentQuestionIndex, questions]);

  const generateAnswers = () => {
    const currentNumber = questions[currentQuestionIndex];
    let correctAnswer: number;
    if (operation === 'multiplication') {
      correctAnswer = number * currentNumber;
    } else {
      correctAnswer = currentNumber;
    }

    const newAnswers: Answer[] = [{ value: correctAnswer, isCorrect: true }];
    
    // Генеруємо 3 неправильні відповіді
    while (newAnswers.length < 4) {
      const wrongAnswer = correctAnswer + Math.floor(Math.random() * 5) - 2;
      if (wrongAnswer !== correctAnswer && !newAnswers.some(a => a.value === wrongAnswer)) {
        newAnswers.push({ value: wrongAnswer, isCorrect: false });
      }
    }

    // Перемішуємо відповіді
    for (let i = newAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newAnswers[i], newAnswers[j]] = [newAnswers[j], newAnswers[i]];
    }

    setAnswers(newAnswers);
  };

  const handleAnswer = (answer: Answer) => {
    if (answer.isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      
      if (currentQuestionIndex === 19) {
        setGameCompleted(true);
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
        setCountdown(10);
      }
    } else {
      handleWrongAnswer();
    }
  };

  const handleWrongAnswer = () => {
    setWrongAnswers(prev => prev + 1);
    if (currentQuestionIndex === 19) {
      setGameCompleted(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setCountdown(10);
    }
  };

  const getQuestionText = () => {
    if (questions.length === 0) return '';
    const currentNumber = questions[currentQuestionIndex];
    if (operation === 'multiplication') {
      return `${number} × ${currentNumber} = ?`;
    } else {
      return `${number * currentNumber} ÷ ${number} = ?`;
    }
  };

  return (
    <ImageBackground 
      source={require('@/assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.push('/testStudie')}>
            <ThemedText style={styles.buttonText}>Назад</ThemedText>
          </TouchableOpacity>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.textContainer}>
            <ThemedText style={styles.textStyle}>
              Правильно: {correctAnswers} | Неправильно: {wrongAnswers} | Завдання: {currentQuestionIndex + 1}/20
            </ThemedText>
          </View>
          <View style={styles.yellowContainer}>
            <ThemedText style={styles.timerText}>{countdown}</ThemedText>
          </View>
          <View style={styles.questionContainer}>
            <ThemedText style={styles.questionText}>{getQuestionText()}</ThemedText>
          </View>
          <View style={styles.answersContainer}>
            {answers.map((answer, index) => (
              <TouchableOpacity
                key={index}
                style={styles.answerButton}
                onPress={() => handleAnswer(answer)}
              >
                <ThemedText style={styles.answerText}>{answer.value}</ThemedText>
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
  questionContainer: {
    width: '100%',
    height: '15%',
    backgroundColor: '#FFB6C1',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
  },
  questionText: {
    fontSize: tableFontSize * 1,
    color: '#8A2BE2',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  answersContainer: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  answerButton: {
    width: '48%',
    height: '48%',
    backgroundColor: '#FFD700',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#8A2BE2',
  },
  answerText: {
    fontSize: tableFontSize * 0.9,
    color: '#8A2BE2',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});