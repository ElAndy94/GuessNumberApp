import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text>The Game is over...</Text>
        <Text>Number of rounds: {props.roundsNumber}</Text>
        <Text>Number was: {props.userNumber}</Text>
        <Button title='NEW GAME' onPress={props.onRestart} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    padding: 42
  }
});

export default GameOverScreen;
