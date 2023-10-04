import {SafeAreaView, StatusBar, View, Text, StyleSheet} from 'react-native'
import Constants from "expo-constants";
import {CENTER, TEXT} from './styles'
import {useState} from 'react'
import GenderSelection from './GenderSelection'
export default function Imc(){
  const [gender, setGender] = useState("female")
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}> BMI CALCULATOR </Text>
        </View>
        <GenderSelection
          style={styles.gender}
          gender={gender}
          setGender={setGender}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1, backgroundColor: "#1d2236",
      paddingTop: Constants.statusBarHeight
  },
  content: {
    flex: 1
  },
  header: {
    ...CENTER,
    height: 70,
    marginBottom: 15,
    borderBottomWidth: 5,
    borderBottomColor: "#16192e"
  },
  headerText: {
    ...TEXT,
    fontSize: 24,
    fontWeight: "500"
  }
})