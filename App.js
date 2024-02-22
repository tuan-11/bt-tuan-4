import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import Home from './Home'

export default function App() {
  return (
    <View>
      <Text>App Component</Text>
      <Home />
    </View>
  );
}

