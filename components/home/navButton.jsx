import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavButton = ({ onPress = () => null, title = 'Button' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: 'white',
    margin:5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    padding: 10,
    width: '95%',
    alignSelf: 'center',
    height: 100,
  },
  appButtonText: {
    color: 'black',
    fontSize: 18,
  },
});



export default NavButton