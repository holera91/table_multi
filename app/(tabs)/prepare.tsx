import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';

import { BackButton } from '@/components/BackButton';
import { ThemedView } from '@/components/ThemedView';
import { CommonStyles } from '@/constants/Styles';

export default function PrepareScreen() {
  const { number } = useLocalSearchParams<{ number: string }>();
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer === 0) {
      router.push('/(tabs)/game');
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleReady = () => {
    router.push({
      pathname: '/(tabs)/game',
      params: { number }
    });
  };

  const renderMultiplicationTable = () => {
    return Array.from({ length: 9 }, (_, i) => i + 1).map((multiplier) => (
      <Text key={multiplier} style={styles.tableRow}>
        {number} × {multiplier} = {Number(number) * multiplier}
      </Text>
    ));
  };

  return (
    <View style={CommonStyles.webWrapper}>
      <ThemedView style={CommonStyles.container}>
        <View style={CommonStyles.header}>
          <BackButton />
          <Text style={CommonStyles.headerTitle}>Готуйся!</Text>
        </View>
        
        <View style={styles.timerContainer}>
          <Text style={styles.timer}>{timer}</Text>
        </View>

        <View style={styles.tableContainer}>
          {renderMultiplicationTable()}
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleReady}>
          <Text style={styles.buttonText}>Готова!</Text>
        </TouchableOpacity>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    marginTop: 45,
    alignItems: 'center',
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
  },
  tableContainer: {
    flex: 0.9,
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  tableRow: {
    fontSize: 32,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
    width: 160,
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
}); 