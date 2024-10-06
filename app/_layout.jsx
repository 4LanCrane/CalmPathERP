import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ActivityIndicator, View } from 'react-native';

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const auth = getAuth(); // Initialize the auth object

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsLoggedIn(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (!loading) {
      if (isLoggedIn) {
        router.replace('/(screens)');
      } else {
        router.replace('/(auth)');
      }
    }
  }, [loading, isLoggedIn, router]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(screens)" options={{ headerShown: false }} />
    </Stack>
  );
}