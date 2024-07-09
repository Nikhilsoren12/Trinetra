// screens/EventScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function EventScreen() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const saveEvent = () => {
    axios.post('http://localhost:5000/events', { name, date, description, category: 'Personal' })
      .then(response => {
        console.log('Event saved:', response.data);
      })
      .catch(error => {
        console.error('There was an error saving the event!', error);
      });
  };

  return (
    <View>
      <Text>Create a new event</Text>
      <TextInput placeholder="Event Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Event Date" value={date} onChangeText={setDate} />
      <TextInput placeholder="Event Description" value={description} onChangeText={setDescription} />
      <Button title="Save Event" onPress={saveEvent} />
    </View>
  );
}
