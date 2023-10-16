import {View, StyleSheet, Text} from 'react-native'
import {BOX, TEXT_LABEL, TEXT_VALUE} from './styles'
import Slider from "@react-native-community/slider"

export default function HeightSelection({style, height, setHeight}){
  return (
    <View style={style}>
      <View style={styles.heightSelection}>
        <Text style={styles.label}> HEIGHT </Text>
        <Text style={styles.value}> 
          {height}
          <Text style={styles.unit}> cm </Text>
        </Text>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={50}
          maximumValue={250}
          minimumTrackTintColor="#9a5871"
          maximumTrackTintColor="#000000"
          onValueChange={(value) => setHeight(Math.round(value))}
          value={height}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  heightSelection: {
    ...BOX,
    margin: 15,
  },
  label: {
     ...TEXT_LABEL,
  },
  value: {
    ...TEXT_VALUE,
  },
  unit: {
    fontSize: 16,
  }
})