import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function TestTemplate() {
  return (
    <ImageBackground 
      source={require('@/assets/images/background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <ThemedView style={styles.container}>
        <View style={styles.navigation}>
          <ThemedText>Navigation</ThemedText>
        </View>
        <View style={styles.main}>
          <ThemedText>Main</ThemedText>
        </View>
        <View style={styles.additional}>
          <ThemedText>Additional</ThemedText>
        </View>
      </ThemedView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    paddingHorizontal: '3%',
    paddingTop: '5%',
    paddingBottom: '2%',
  },
  navigation: {
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB6C1',
    marginBottom: '5%',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98FB98',
    marginTop: '10%',
    marginBottom: '5%',
  },
  additional: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700',
  },
}); 