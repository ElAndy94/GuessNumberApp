import React from 'react';

import { View, StyleSheet, Text, Button, Image } from 'react-native';
import Card from '../components/Card';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      {/* <Card style={styles.card}> */}
      <TitleText style={styles.title}>The Game is over...</TitleText>
      <View style={styles.imageContainer}>
        <Image
          //fadeDuration={1000}
          source={require('../assets/success.png')}
          // source={{
          //   uri:
          //     'https://images.unsplash.com/photo-1566415541515-d0cee38648ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'
          // }}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      {/* resizeMode='contain' This would stop it from cropping.*/}
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <Button title='NEW GAME' onPress={props.onRestart} />
      {/* </Card> */}
    </View>
  );
};

//numberOfLines={1} ellipsizeMode="tail"

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // card: {
  //   width: '85%',
  //   padding: 42,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  title: {
    fontSize: 20
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    // width: '80%'
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;
