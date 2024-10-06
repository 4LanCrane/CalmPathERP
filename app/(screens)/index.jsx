import { useRouter } from 'expo-router'
import { ScrollView, StyleSheet, View } from 'react-native'

import NavButton from '../../components/home/navButton'
import colors from '../../constants/colors';

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
    backgroundColor: colors.primary,
  },
});