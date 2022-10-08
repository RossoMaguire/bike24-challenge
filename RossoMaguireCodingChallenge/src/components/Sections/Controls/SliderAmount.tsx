import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';

const SliderAmount: React.FC = () => {
  const { setSelectedAmount, selectedAmount } = useCartContext();

  const handleChange = (amount: any) => setSelectedAmount(amount);

  return (
    <Flex>
      <Slider
        flex='1'
        focusThumbOnChange={false}
        value={selectedAmount}
        onChange={handleChange}
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
  );
};

export default SliderAmount;
