import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import NavButton from '../components/home/navButton'

export default function Home() {
  return (
    <>
      <SafeAreaView>
        <View style={styles.navButtonContainer}>
          <NavButton title="test" onPress={() => null} />
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