import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';

const SliderAmount: React.FC = () => {
  const [showMaxAmountMessage, setShowMaxAmountMessage] =
    React.useState<boolean>(false);

  const {
    selectedProduct,
    setSelectedAmount,
    selectedAmount,
    selectedMaxAmount,
    selectedTotalPrice,
  } = useCartContext();

  const handleChange = (amount: any) => {
    if (amount === selectedProduct.maxAmount) {
      setShowMaxAmountMessage(true);
    } else if (showMaxAmountMessage) {
      setShowMaxAmountMessage(false);
    }

    setSelectedAmount(amount);
  };

  return (
    <>
      <Flex>
        <Slider
          flex='1'
          focusThumbOnChange={false}
          value={selectedAmount}
          onChange={handleChange}
          min={1}
          max={selectedMaxAmount}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb fontSize='sm' boxSize='32px' children={selectedAmount} />
        </Slider>
        <NumberInput
          maxW='100px'
          mr='2rem'
          value={selectedAmount}
          onChange={handleChange}
        >
          <NumberInputField color='black' />
        </NumberInput>
      </Flex>
      <Text
        fontSize='md'
        color='black'
      >{`X ${selectedProduct.price} = ${selectedTotalPrice}`}</Text>
      <Text
        fontSize='md'
        color='red'
        display={showMaxAmountMessage ? 'block' : 'none'}
      >
        Maximum amount selected
      </Text>
    </>
  );
};

export default SliderAmount;
