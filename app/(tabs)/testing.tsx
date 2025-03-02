import { StyleSheet, View, Text, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { BackButton } from '@/components/BackButton';
import { ThemedView } from '@/components/ThemedView';

export default function TestingScreen() {
  const renderBlock = (number: number) => (
    <View style={styles.block} key={number}>
      <View style={styles.stars}>
        <FontAwesome name="star" size={24} color="gold" />
        <FontAwesome name="star" size={24} color="gold" />
        <FontAwesome name="star" size={24} color="gold" />
      </View>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.title}>Тестування</Text>
      </View>
      <View style={styles.emptySpace} />
      
      <View style={styles.emptySpace} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
    ...(Platform.OS === 'web' && {
      width: 375,
      height: 667,
      margin: 'auto',
      paddingTop: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
  },
  emptySpace: {
    flex: 1,
    backgroundColor: 'violet', 
    ...(Platform.OS === 'web' ? {} : { backgroundColor: 'blue' }),// Фиолетовый цвет для пустого пространства
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    ...(Platform.OS === 'web' ? {} : { top: 90 }),
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
  grid: {
    flex: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...(Platform.OS === 'web' ? {} : { top: 110 }),
  },
  block: {
    width: '30%',
    aspectRatio: 1,
    marginBottom: 10,
    backgroundColor: 'purple', // Фиолетовый цвет для блока
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});