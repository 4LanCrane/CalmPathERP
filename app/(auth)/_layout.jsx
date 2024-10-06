import { Stack } from "expo-router";
import colors from "../../constants/colors";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, title: 'Login' }} />
      <Stack.Screen name="register" options={{ title: 'Register',
          headerStyle: { backgroundColor: colors.primary }, 
          headerTintColor: "#fff", 
          headerTitleStyle: { fontWeight: 'bold' }, 
          headerBackTitle: 'Back', 
        }}
      />
    </Stack>
  );
}