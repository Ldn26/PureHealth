import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
const CustomButton = ({title,mainstyle,titlestyle,isLoading ,handelPress}) => {
  return (
<TouchableOpacity className={`${mainstyle} ${isLoading ? 'opacity-50' : ''}`} activeOpacity={0.7} onPress={handelPress} >
    <Text className={titlestyle}>{title}</Text>
</TouchableOpacity>
  )
}

export default CustomButton