
import {View, Text} from 'react-native'

export default function HelloWorld(){
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "green"
    }}>
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
        color: "red",
        textTransform: "uppercase"
      }}>
        Hello World !!!!!
      </Text>
    </View>
  )
}