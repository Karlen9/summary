import { Flex } from '@chakra-ui/react';
import { NavigationItem } from './navigation-item';
import { ContactMeModal } from './contact-me-modal';

export const Navigation = () => {
  const navigationItems = [
    { title: 'About Me', isButton: false },
    { title: 'Passion', isButton: false },
    { title: 'Summary', isButton: false },
  ];

  return (
    <Flex justifyContent={'space-between'} w={'100%'}>
      <Flex>
        {/* logo */}
        Karlen
      </Flex>

      <Flex columnGap={5}>
        {navigationItems.map((item) => (
          <NavigationItem key={item.title} title={item.title} />
        ))}
        <ContactMeModal />
      </Flex>
    </Flex>
  );
};
