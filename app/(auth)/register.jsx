import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig'; // Adjust the path as necessary

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error:', 'Passwords do not match.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('User created successfully!');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error:', 'Email already in use. Please log in.');
      } else {
        Alert.alert('Error:', error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CalmPathERP - Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    width: '80%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});