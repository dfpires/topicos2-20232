
import {View, TouchableOpacity} from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'

export default function Actions({play, canPlay}) {
  return (
    <View>
      <TouchableOpacity>
        <FontAwesome5 name={"hand-rock"} size={32} color="#6a53aa"/>
      </TouchableOpacity>
       <TouchableOpacity>
        <FontAwesome5 name={"hand-paper"} size={32} color="#6a53aa"/>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name={"hand-scissors"} size={32} color="#6a53aa"/>
      </TouchableOpacity>
    </View>
  )
}