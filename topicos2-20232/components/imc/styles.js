import {ViewStyle} from 'react-native'

export const CENTER: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
};

export const TEXT: ViewStyle = {
  color: "#fff",
  textAlign: "center",
}

export const TEXT_LABEL: ViewStyle = {
  fontSize: 15,
  textAlign: "center",
  color: "#848694",
}

export const TEXT_VALUE: ViewStyle = {
  ...TEXT,
  fontSize: 35,
  lineHeight: 55,
  fontWeight: "bold"
}

export const ROW: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
};

export const BOX: ViewStyle = {
  flex: 1,
  backgroundColor: "#323344",
  padding: 15,
  borderRadius: 10,
};

export const BUTTON: ViewStyle = {
  ...CENTER,
  marginHorizontal: 15,
  height: 60,
  borderRadius: 5,
  backgroundColor: "#e83d66",
}

export const BUTTON_TEXT: TextStyle = {
  ...TEXT,
  fontSize: 24,
  fontWeight: "bold",
}

