import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  padding?: number;
  children: ReactNode;
} & FlexProps;

export const Layout = ({ padding, children, ...restProps }: Props) => {
  return (
    <Flex p={padding ? padding : 6} {...restProps}>
      {children}
    </Flex>
  );
};
