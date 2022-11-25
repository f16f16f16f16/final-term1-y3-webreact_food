import { Box, VStack, Text, Divider } from "@chakra-ui/react";
import Link from "next/link";

export default function RecipePage() {
  return (
    <Box>
      <VStack spacing={0}>
        <Box
          w="60%"
          h="100%"
          backgroundColor="#FC8181"
          fontSize="20px"
          color="black"
        >
          <Text ml="20px">กระทู้ล่าสุด</Text>
        </Box>

        <Box
          w="60%"
          h="60px"
          backgroundColor="#CBD5E0"
          fontSize="20px"
          color="black"
        >
          <Link href="#">
            <Text ml="60px" mt="14px">
              ไข่เจียวสไตล์บ้านเฮา
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
      
        <Box height="80px"></Box>
      </VStack>
      
    </Box>
  );
}
