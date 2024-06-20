import { Outlet } from "react-router-dom";
import {
  Box,
  BoxProps,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

interface LinkItemProps {
  name: string;
  href: string;
  children?: LinkItemProps[];
}

type NavItemProps = FlexProps & LinkItemProps;

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Getting Started", href: "/docs" },
  {
    name: "ReactOpener",
    href: "/docs/react-opener",
    children: [
      { name: "useOpener", href: "/docs/react-opener/use-opener" },
      { name: "custom", href: "/docs/react-opener/custom" },
    ],
  },
  {
    name: "ReactToastOpener",
    href: "/docs/react-toast-opener",
    children: [
      { name: "useToast", href: "/docs/react-toast-opener/use-toast" },
      { name: "custom", href: "/docs/react-toast-opener/custom" },
    ],
  },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg="gray.700"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <a href="/">ReactOpener</a>
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <>
          <NavItem name={link.name} href={link.href} />
          {link.children?.map((childLink) => (
            <NavItem
              marginLeft="36px"
              name={childLink.name}
              href={childLink.href}
            />
          ))}
        </>
      ))}
    </Box>
  );
};

const NavItem = ({ href, name, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href={href}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "whiteAlpha.200",
        }}
        {...rest}
      >
        {name}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      display={{ base: "flex", md: "none" }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      gap={"12px"}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        <a href="/">ReactOpener</a>
      </Text>
    </Flex>
  );
};

export const DocsLayout: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Flex
          direction="column"
          maxWidth={"1200px"}
          margin="0 auto"
          mt={{ base: 0, md: "24px" }}
          gap="12px"
        >
          <Outlet />
        </Flex>
      </Box>
    </Box>
  );
};
