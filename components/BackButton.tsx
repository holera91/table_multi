import { StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { IconSymbol } from './ui/IconSymbol';

export function BackButton() {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => router.back()}
    >
      <IconSymbol 
        name="chevron.left" 
        size={24} 
        color="#8A2BE2" // Фиолетовый
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 