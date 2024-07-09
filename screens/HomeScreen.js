// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to Trinetra</Text>
      <Button title="Create Event" onPress={() => navigation.navigate('Event')} />
    </View>
  );
}
