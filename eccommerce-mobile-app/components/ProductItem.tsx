import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'tamagui'

const ProductItem = ({product}) => {
  return (
    <View>
          <Text>{product.name}</Text>
          <Button color={'blueviolet'}>Click here</Button>
    </View>
  )
}

export default ProductItem