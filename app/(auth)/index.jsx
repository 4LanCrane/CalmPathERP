import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig'; // Adjust the path as necessary

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Logged in successfully!');
    } catch (loginError) {
      Alert.alert('Login Error:', loginError.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CalmPathERP - Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate('register')}
      >
        <Text style={styles.buttonText}>Create An Account</Text>
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