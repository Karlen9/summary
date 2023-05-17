import { Box, Button, Flex } from '@chakra-ui/react';
import { CustomButton } from './custom-button';

type Props = {
  title: string;
};

export const NavigationItem = ({ title }: Props) => {
  return (
    <Flex alignItems={'center'}>
      <Box>{title}</Box>
    </Flex>
  );
};
