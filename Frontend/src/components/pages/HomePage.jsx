import { SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useProductStore } from "../../store/product";
import ProductCard from "../ProductCard";

const MotionDiv = motion.div;

const HomePage = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {products.length === 0 ? (
        <Text fontSize="xl" textAlign="center" mt={10}>
          No products found 😢
        </Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} px={6} mt={6}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
      )}
    </MotionDiv>
  );
};

export default HomePage;