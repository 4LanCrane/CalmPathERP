import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavButton from '../../components/home/navButton'
import { Stack, useRouter} from 'expo-router';


export default function Home() {
  const router = useRouter();
  return (
    <>
      <SafeAreaView>
        <View style={styles.navButtonContainer}>
        <NavButton title="Account" onPress={() => router.navigate("test")} />
          <NavButton title="test 2" onPress={() => null}/>
          <NavButton />
          <NavButton />
          <NavButton />
          <NavButton />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  navButtonContainer: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});