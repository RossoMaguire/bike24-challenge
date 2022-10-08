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

const SliderAmount: React.FC = () => {
  const [value, setValue] = React.useState<number | string>(0);

  const handleChange = (value: number | string) => setValue(value);

  return (
    <Flex>
      <Slider
        flex='1'
        focusThumbOnChange={false}
        value={value as number}
        onChange={handleChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize='sm' boxSize='32px' children={value} />
      </Slider>
      <NumberInput maxW='100px' mr='2rem' value={value} onChange={handleChange}>
        <NumberInputField color='black' />
      </NumberInput>
    </Flex>
  );
};

export default SliderAmount;
