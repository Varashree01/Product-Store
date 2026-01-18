import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { motion } from "framer-motion";
import { gradients } from "../../theme";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="1140px" px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="extrabold"
          bgGradient={gradients.primary}
          bgClip="text"
        >
          <Link to="/">Product Store 🛒</Link>
        </Text>

        <HStack spacing={2}>
          <Link to="/create">
            <Button
              bgGradient={gradients.primary}
              color="white"
              _hover={{ bgGradient: gradients.hover }}
            >
              <PlusSquareIcon />
            </Button>
          </Link>

          <Button onClick={toggleColorMode} as={motion.button} whileTap={{ rotate: 180 }}>
            {colorMode === "light" ? <IoMoon /> : <LuSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
