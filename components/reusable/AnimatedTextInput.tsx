import React from 'react';
import {View, StyleSheet, TextInput, Text, Animated} from 'react-native';

const AnimatedTextInput = props => {
  const {placeholder, value, onChangeText, styleObj} = props;

  const moveText = React.useRef(new Animated.Value(0)).current;

  const [isOnFocus, setIsOnFocus] = React.useState(false);

  const onFocusHandler = () => {
    moveTextTop();
    setIsOnFocus(true);
  };

  const onBlurHandler = () => {
    if (value === '') {
      moveTextBottom();
      setIsOnFocus(false);
    }
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [6, -15],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  return (
    <View style={styleObj}>
      <Animated.View style={[styles.animatedContainer, animStyle]}>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            alignSelf: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 60,
          }}>
          {placeholder}
        </Text>
      </Animated.View>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 90,
          borderWidth: 1,
          zIndex: 0,
          borderColor: isOnFocus === true ? '#BDBDBD' : '#000',
          paddingLeft: 22,
          fontSize: 15,
          color: '#000',
        }}
      />
    </View>
  );
};

export default AnimatedTextInput;

const styles = StyleSheet.create({
  animatedContainer: {
    top: 5,
    left: 20,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
});
