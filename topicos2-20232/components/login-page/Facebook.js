import {StatusBar, Image, StyleSheet,Dimensions, SafeAreaView, View, TextInput,TouchableOpacity, Text} from 'react-native'
import FacebookImage from '../../assets/login-page-images/facebook-banner.jpg'
export default function Facebook(){
  return (
    <>
      <StatusBar style="light"/>
      <Image source={FacebookImage} style={styles.banner}/>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TextInput 
            style={[styles.input, styles.username]}
            placeholder="Número de telefone ou email"
            placeholderTextColor="#cdcdcf"/>
          <TextInput 
            style={[styles.input, styles.password]}
            secureTextEntry={true}
            placeholder="Senha"
            placeholderTextColor="#cdcdcf"/>
          <TouchableOpacity style={styles.button}> 
            <Text style={styles.buttonText}> Conecte-se </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}> 
            <Text style={styles.linkText}> Esqueceu a senha? </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}> 
            <Text style={styles.linkText}> Volta </Text> 
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={styles.divider}>
            <View style={styles.dividerLine}/> 
            <Text style={styles.footerText}> OU </Text>
            <View style={styles.dividerLine}/>
          </View>
          <TouchableOpacity style={[styles.button, styles.buttonRegister]}>
            <Text style={[styles.buttonText, styles.buttonRegisterText]}> Criar uma nova conta </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}
const styles = StyleSheet.create({
  banner: {
    resizeMode: "contain",
    width: "100%",
    height: (Dimensions.get("window").width / 75) * 46
  },
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  content: {
    padding: 22
  },
  input: {
    borderWidth: 1,
    borderColor: "#cdcdcf",
    color: "#333333",
    fontSize: 16,
    height: 44,
    paddingHorizontal: 15
  },
  username: {
    borderBottomWidth: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3
  },
  password: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  button: {
    height: 42,
    borderRadius: 6,
    backgroundColor: "#1977f3",
    justifyContent: "center",
    marginVertical: 15
  },
  buttonText: {
    color: "#b4cafb",
    textAlign: "center",
    fontSize: 16
  },
  link: {
    paddingVertical: 8
  },
  linkText: {
    color: "#1c6ede",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500"
  },
  footer: {
    alignItems: "center",
    padding: 22,
    paddingBottom: 0
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    marginBottom: 10
  },
  dividerLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#cdccd0"
  },
  footerText: {
    width: 50,
    textAlign: "center"
  },
  buttonRegister: {
    width: "100%",
    backgroundColor: "#e7f3ff"
  },
  buttonRegisterText: {
    color: "#1077f7"
  }
})