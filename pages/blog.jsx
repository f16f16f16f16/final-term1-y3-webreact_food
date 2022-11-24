import Navbar from "../public/components/navbar";
import Footer from "../public/components/Footer";
import { Box, Heading, VStack } from "@chakra-ui/react";
import CommonCard from "../public/components/Home/CommonCard";
import RecipeCardAll from "../public/components/RecipeOfficial/RecipeCardAll";
import NavPage from "../public/components/NavPage";
import BlogHeader from "../public/components/RecipeOfficial/BlogHeader";
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
