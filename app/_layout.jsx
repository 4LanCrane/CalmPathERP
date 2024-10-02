import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ActivityIndicator, View } from 'react-native';

export default function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // if the user is logged in, set isLoggedIn to true
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //
  useEffect(() => {
    if (!loading && !isLoggedIn) {
      try {
        router.replace('/authpage');
      } catch (err) {
        console.error('Failed to navigate to authpage:', err);
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
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}