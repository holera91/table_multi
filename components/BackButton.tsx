import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { CommonStyles } from '@/constants/Styles';

export function BackButton() {
  return (
    <TouchableOpacity
      style={CommonStyles.backButton}
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