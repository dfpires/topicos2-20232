
import {SafeAreaView, Text, StyleSheet} from "react-native"
import Constants from "expo-constants"

export default function HelloWorld2() {
    return (
      <SafeAreaView style={styles.container}>
          <Text style={styles.heading}> 
            Hello World <Text style={styles.destaque1}> 1 </Text> 
          </Text>   
          <Text style={styles.heading}> 
            Hello World <Text style={styles.destaque2}> 2  </Text>
          </Text> 
          <Text style={styles.heading}> 
            Hello World <Text style={styles.destaque3}> 3 </Text>

          </Text>   
      </SafeAreaView>
    )  
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  },
  heading: {
    marginTop: 50, 
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase"
  }, 
  destaque1: {
    color: "#e74c3c"
  },
  destaque2: {
    fontStyle: "italic",
    textDecorationLine: "underline",
    color: "#2980b9"
  },
  destaque3: {
    color: "#fff",
    backgroundColor: "#59595d"
  }
})