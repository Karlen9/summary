import { Button, ButtonProps } from '@chakra-ui/react';

type Props = {
  title?: string;
} & ButtonProps;

export const CustomButton = ({ title, ...restProps }: Props) => {
  return (
    <Button
      variant={'solid'}
      color={'white'}
      bgColor={'blue.400'}
      _hover={{ bgColor: 'white', color: 'blue.400' }}
      {...restProps}
    >
      {title}
    </Button>
  );
};
