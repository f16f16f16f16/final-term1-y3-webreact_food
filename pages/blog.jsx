import Navbar from "../public/components/navbar";
import Footer from "../public/components/Footer";
import { Box, Heading, VStack } from "@chakra-ui/react";

import BlogDesc from "../public/components/RecipeOfficial/BlogDesc";

export default function Recipe() {
  return (
    <Box>
      <Navbar />
      <VStack >
        <BlogDesc />
      </VStack>
      <Footer />
    </Box>
  );
}
