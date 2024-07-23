import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
const CustomButton = ({title,mainstyle,titlestyle,handelPress}) => {
  return (
<TouchableOpacity className={mainstyle} onPress={handelPress} >
    <Text className={titlestyle}>{title}</Text>
</TouchableOpacity>
  )
}

export default CustomButton