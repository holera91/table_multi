import { StyleSheet } from 'react-native';

import { BackButton } from '@/components/BackButton';
import { ThemedView } from '@/components/ThemedView';

export default function StudieScreen() {
  return (
    <ThemedView style={styles.container}>
      <BackButton />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 