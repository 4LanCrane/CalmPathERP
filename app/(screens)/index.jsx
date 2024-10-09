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
            title="Start An Exercise"
            onPress={() => router.navigate('startanexersice')}
          />
          <NavButton title="What Is ERP" onPress={() => null}/>
          <NavButton title="Medals" onPress={() => null}/>
          <NavButton title="Fear Ladder" onPress={() => null}/>
          <NavButton title="Victory Log" onPress={() => null}/>
          <NavButton title="Progress" onPress={() => null}/>
          <NavButton
            title="Account Management"
            onPress={() => router.navigate('accountmanagement')}
          />
       
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