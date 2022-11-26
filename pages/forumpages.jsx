import { Box } from "@chakra-ui/react";
import Footer from "../public/components/Footer";
import Navbar from "../public/components/Navbar";
import ForumPages from "../public/components/Unofficial/Forum/ForumPages";

export default function RecipeUnoffId() {
  return (
    <Box>
      <Navbar />
      <ForumPages />
      <Footer />
    </Box>
  );
}
