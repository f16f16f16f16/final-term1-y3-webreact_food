import { Box } from "@chakra-ui/react";
import Footer from "../public/components/Footer";
import Navbar from "../public/components/Navbar";
import RecipeBlog from "../public/components/Unofficial/Recipe/RecipeBlog";

export default function RecipeUnoffId() {
  return (
    <Box>
      <Navbar />
      <RecipeBlog />
      <Footer />
    </Box>
  );
}
