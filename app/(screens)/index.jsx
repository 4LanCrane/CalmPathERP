import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavButton from '../../components/home/navButton'
import { Stack, useRouter} from 'expo-router';


export default function Home() {
  const router = useRouter();
  return (
    <>
      <View style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
    
          <NavButton
            title="Account Management"
            onPress={() => router.navigate('accountmanagement')}
          />
          <NavButton title="test 2" onPress={() => null}/>
          <NavButton />
          <NavButton />
          <NavButton />
          <NavButton />
          <NavButton />
          <NavButton />
          <NavButton />
          <NavButton />
          <NavButton />
          <NavButton />
        
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#97BCFE',
  },
});