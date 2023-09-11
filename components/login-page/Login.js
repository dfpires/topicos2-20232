import {SafeAreaView, View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity} from "react-native"
import Constants from "expo-constants"
import {FontAwesome5} from "@expo/vector-icons"

export default function Login(){
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#61dafb"/>
      <View style={styles.content}>
        <View style={styles.textWrapper}> 
          <Text style={styles.userText}> Olá </Text>
          <Text style={styles.userText}> Fulano de tal </Text>
          <Text style={styles.userText}> Seja Bem-Vindo</Text>
        </View>
        <View style={styles.form}>
          <FontAwesome5 style={styles.iconLock} name="lock"/>
          <TextInput style = {styles.password}/>
          <View style={styles.action}>
          <TouchableOpacity>
            <Text style={styles.userText}> Esqueceu a senha </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.userText}> Entrar assim mesmo </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#b0006d",
    paddingTop: Constants.statusBarHeight
  },
  content: {
    paddingHorizontal: 30
  },
  textWrapper: {
    marginTop: 60,
    marginBottom: 30
  },
  userText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 30
  },
  form : {
    marginBottom: 30
  },
  iconLock: {
    color: "#929292",
    position: "absolute",
    fontSize: 15,
    top: 22,
    left: 22,
    zIndex: 10
  },
  password: {
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#929292",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center"
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  }
})