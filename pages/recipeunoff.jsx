import { Box } from "@chakra-ui/react";
import Footer from "../public/components/Footer";
import Navbar from "../public/components/Navbar";
import RecipePage from "../public/components/Unofficial/Recipe/RecipePage";





export default function RecipeUnoff() {
    return (
        <Box>
        <Navbar/>
        <Box mt={100}>
        <RecipePage />
        </Box>
        <Footer/>
        </Box>
    )
}