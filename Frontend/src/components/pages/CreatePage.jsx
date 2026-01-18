import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../../store/product";
import { gradients } from "../../theme";

const CreatePage = () => {
  const [product, setProduct] = useState({ name: "", price: "", image: "" });
  const toast = useToast();
  const { createProduct } = useProductStore();

  const handleSubmit = async () => {
    await createProduct(product);
    toast({ title: "Product added", status: "success" });
    setProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container maxW="md">
      <Heading mb={6}>Add Product</Heading>

      <VStack spacing={4}>
        <Input placeholder="Name" value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })} />
        <Input placeholder="Price" value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })} />
        <Input placeholder="Image URL" value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })} />

        <Button
          bgGradient={gradients.primary}
          color="white"
          _hover={{ bgGradient: gradients.hover }}
          onClick={handleSubmit}
        >
          Add Product
        </Button>
      </VStack>
    </Container>
  );
};

export default CreatePage;