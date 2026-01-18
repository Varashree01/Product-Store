import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { gradients } from "../theme";
import { useProductStore } from "../store/product";

const MotionBox = motion(Box);

const ProductCard = ({ product }) => {
  const toast = useToast();
  const { deleteProduct } = useProductStore();

  const handleDelete = async () => {
    await deleteProduct(product._id);
    toast({ title: "Product deleted", status: "success" });
  };

  return (
    <MotionBox
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      bg="white"
      _dark={{ bg: "gray.800" }}
      rounded="lg"
      shadow="md"
      overflow="hidden"
    >
      <Image src={product.image} h={48} w="full" objectFit="cover" />

      <Box p={4}>
        <Heading size="md" mb={2} color="whiteAlpha.900">
          {product.name}
        </Heading>

        <Text
          fontWeight="bold"
          bgGradient={gradients.primary}
          bgClip="text"
          mb={4}
        >
          ₹ {product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} size="sm" />
          <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            size="sm"
            onClick={handleDelete}
          />
        </HStack>
      </Box>
    </MotionBox>
  );
};

export default ProductCard;