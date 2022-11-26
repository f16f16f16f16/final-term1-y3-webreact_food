import { Box } from "@chakra-ui/react";
import Footer from "../public/components/Footer";
import Navbar from "../public/components/Navbar";
import ForumPage from "../public/components/Unofficial/Forum/ForumPage";

export default function RecipeUnoffId() {
  return (
    <Box>
      <Navbar />
      <ForumPage />
      <Footer />
    </Box>
  );
}
