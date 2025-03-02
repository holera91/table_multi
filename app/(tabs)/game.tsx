import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { router, useLocalSearchParams } from 'expo-router';

import { BackButton } from '@/components/BackButton';
import { ThemedView } from '@/components/ThemedView';
import { CommonStyles } from '@/constants/Styles';

export default function GameScreen() {
  const { number } = useLocalSearchParams<{ number: string }>();
  const [currentExample, setCurrentExample] = useState(1);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    setOptions(generateOptions(Number(number) * currentExample));
  }, [number, currentExample]);

  const generateOptions = (correctAnswer: number) => {
    const options = [correctAnswer];
    while (options.length < 4) {
      const randomOption = correctAnswer + Math.floor(Math.random() * 10) - 5;
      if (!options.includes(randomOption) && randomOption > 0) {
        options.push(randomOption);
      }
    }
    return options.sort(() => Math.random() - 0.5);
  };

  const handleAnswer = (selected: number) => {
    const correctAnswer = Number(number) * currentExample;
    setSelectedAnswer(selected);
    setIsCorrect(selected === correctAnswer);

    if (selected === correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentExample < 9) {
        setCurrentExample(currentExample + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        router.back();
      }
    }, 1000);
  };

  const getButtonStyle = (option: number) => {
    if (selectedAnswer !== option) return styles.optionButton;
    return {
      ...styles.optionButton,
      backgroundColor: isCorrect ? '#90EE90' : '#FF6B6B',
    };
  };

  return (
    <View style={CommonStyles.webWrapper}>
      <ThemedView style={CommonStyles.container}>
        <View style={CommonStyles.header}>
          <BackButton />
          <Text style={CommonStyles.headerTitle}>Вирішуй!</Text>
        </View>

        <View style={styles.scoreContainer}>
          <Text style={styles.score}>Рахунок: {score}</Text>
        </View>

        <View style={styles.exampleContainer}>
          <Text style={styles.example}>
            {number} × {currentExample} = ?
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={getButtonStyle(option)}
              onPress={() => !selectedAnswer && handleAnswer(option)}
              disabled={selectedAnswer !== null}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  scoreContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  exampleContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  example: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    padding: 20,
  },
  optionButton: {
    width: '45%',
    aspectRatio: 2,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
}); 