import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';

import { ThemedText } from './ThemedText';

const { width } = Dimensions.get('window');

type RouteType = '/(tabs)/main' | '/(tabs)/studie' | '/(tabs)/testing';

export function NavigationButton({ title, route }: { title: string; route: RouteType }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => router.push(route)}
    >
      <ThemedText style={styles.buttonText}>{title}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
    width: width * 0.4,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
}); 