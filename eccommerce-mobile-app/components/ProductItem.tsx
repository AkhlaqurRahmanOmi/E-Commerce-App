import React from 'react';
import { Pressable } from 'react-native';

import { Button, Card, Image, Stack, Text, useTheme } from 'tamagui';

const ProductItem = ({ product }) => {
  const theme = useTheme();

  return (
    <Pressable style={{ flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => console.log(`Pressed on ${product.name}`)} >
    <Card
      bordered
      elevate
      width={350}
      maxWidth="100%"
      padding="$4"
      margin="$2"
      backgroundColor="$background"
      justifyContent='center'
      alignItems='center'
      animation="superBouncy"
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.975 }}
    >
      {/* Product Image */}
        <Card.Header paddingBottom="$3" justifyContent='center'
          alignItems='center'>
        <Image
          source={{
            uri: product.image || 'https://via.placeholder.com/150',
          }}
          width={200}
          height={200}
          borderRadius="$4"
          />
      </Card.Header>

      {/* Product Details */}
      <Stack paddingHorizontal="$2" space="$3">
        <Text fontSize="$6" fontWeight="bold" color="$color">
          {product.name}
        </Text>
        <Text fontSize="$4" color="$color">
          {product.description || 'This is a placeholder for product details.'}
        </Text>
      </Stack>

      {/* Action Button */}
      <Card.Footer paddingTop="$3">
        <Button
          size="$large"
          theme="orange_active"
          alignSelf="center"
          width="80%"
          borderRadius="$3"
          >
          Buy Now
        </Button>
      </Card.Footer>
    </Card>
   </Pressable>
  );
};

export default ProductItem;
