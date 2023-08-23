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
          <TouchableOpacity> 
            <Text> Conecte-se </Text>
          </TouchableOpacity>
          <TouchableOpacity> 
            <Text> Esqueceu a senha? </Text>
          </TouchableOpacity>
          <TouchableOpacity> 
            <Text> Volta </Text> 
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <View> 
              <Text> OU </Text>
            </View>
          </View>
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
  }
})