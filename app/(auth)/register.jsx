import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {
  SafeAreaView,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'

import colors from '../../constants/colors'
import ClearPathLogo from '../../assets/ClearpathLogo.png'

import { auth } from '../../firebaseConfig'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error:', 'Passwords do not match.')
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      Alert.alert('User created successfully!')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error:', 'Email already in use. Please log in.')
      } else {
        Alert.alert('Error:', error.message)
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={ClearPathLogo} style={styles.logo} />
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.primary,
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
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
})
