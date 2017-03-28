import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Animated, Easing } from 'react-native';

export default class AnimatedTiming extends Component {
  componentWillMount() {
     this.animatedValue = new Animated.Value(100);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 300,
      duration: 3000
    }).start()
  }

  render() {
    const animatedStyle = { height: this.animatedValue };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    backgroundColor: "#333",
    width: 100,
    height: 100,
  }
})

AppRegistry.registerComponent('AnimatedTiming', () => AnimatedTiming);
