import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimeOfDay = () => {
  const [timeOfDay, setTimeOfDay] = useState('');

  const getTimeOfDay = () => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) {
      return 'morning';
    } else if (hours >= 12 && hours < 17) {
      return 'afternoon';
    } else if (hours >= 17 && hours < 21) {
      return 'evening';
    } else {
      return 'night';
    }
  };

  useEffect(() => {
    setTimeOfDay(getTimeOfDay());
  }, []);

  const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    view: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  const getMessage = () => {
    switch (timeOfDay) {
      case 'morning':
        return 'Good morning!';
      case 'afternoon':
        return 'Good afternoon!';
      case 'evening':
        return 'Good evening!';
      case 'night':
        return 'Good night!';
      default:
        return 'Hello!';
    }
  };

  return (
    <View >
    <Text>Hello</Text>
      <Text style={styles.text}>{getMessage()}</Text>
    </View>
  );
};

export default TimeOfDay;
