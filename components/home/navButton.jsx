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
    backgroundColor: '#007BFF',
    elevation: 20,
    flexBasis : '30%',
    margin: 5,
    alignItems: 'center',
    height: 240,
    justifyContent: 'center',
    borderRadius: 15,
    
  },
  appButtonText: {
    color: 'white',
    fontSize: 18,
  },
});



export default NavButton