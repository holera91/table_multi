import { StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export function BackButton() {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => router.back()}
    >
      <Ionicons 
        name="chevron-back" 
        size={24} 
        color="#8A2BE2"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 90,
    left: 20,
    backgroundColor: '#FFD700',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
}); 