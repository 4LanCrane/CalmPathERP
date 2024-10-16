import { Stack } from "expo-router";




export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#97BCFE' },
          title: 'ClearPath',
          headerLargeTitle: true,
          headerLargeStyle: { backgroundColor: '#97BCFE' },
          headerLargeTitleShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="accountmanagement"
        options={{ title: 'My Account',
          headerStyle: { backgroundColor: '#97BCFE' }, 
          headerTintColor: "#fff", 
          headerTitleStyle: { fontWeight: 'bold' }, 
          headerBackTitle: 'Back', 
        }}
      />

      <Stack.Screen
        name="startanexersice"
        options={{ title: 'test',
          headerStyle: { backgroundColor: '#97BCFE' }, 
          headerTintColor: "#fff", 
          headerTitleStyle: { fontWeight: 'bold' }, 
          headerBackTitle: 'Back', 
        }}
      />


    </Stack>
  );
}