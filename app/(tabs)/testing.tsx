import { StyleSheet, View, Text, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { BackButton } from '@/components/BackButton';
import { ThemedView } from '@/components/ThemedView';
import { CommonStyles } from '@/constants/Styles';

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
    <View style={CommonStyles.webWrapper}>
      <ThemedView style={CommonStyles.container}>
        <View style={CommonStyles.header}>
          <BackButton />
          <Text style={CommonStyles.headerTitle}>Тестування</Text>
        </View>
        <View style={styles.emptySpace} />
        <View style={styles.emptySpace} />
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: CommonStyles.container,
  header: CommonStyles.header,
  emptySpace: {
    flex: 1,
    backgroundColor: 'violet', 
    ...(Platform.OS === 'web' ? {} : { backgroundColor: 'blue' }),// Фиолетовый цвет для пустого пространства
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