import { StyleSheet, View, Text, Platform, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

import { BackButton } from '@/components/BackButton';
import { ThemedView } from '@/components/ThemedView';
import { CommonStyles } from '@/constants/Styles';

export default function StudieScreen() {
  const renderBlock = (number: number) => (
    <TouchableOpacity 
      style={styles.block} 
      key={number}
      onPress={() => router.push({
        pathname: '/(tabs)/prepare',
        params: { number }
      })}
    >
      <Text style={styles.number}>{number}</Text>
      <View style={styles.stars}>
        <FontAwesome name="star" size={24} color="gold" />
        <FontAwesome name="star" size={24} color="gold" />
        <FontAwesome name="star" size={24} color="gold" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={CommonStyles.webWrapper}>
      <ThemedView style={CommonStyles.container}>
        <View style={CommonStyles.header}>
          <BackButton />
          <Text style={CommonStyles.headerTitle}>Обери число</Text>
        </View>
        <View style={styles.emptySpace} />
        <View style={styles.grid}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(renderBlock)}
        </View>
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
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
  number: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});