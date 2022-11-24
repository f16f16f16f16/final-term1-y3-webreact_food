import Navbar from "../public/components/Navbar";
import CommonCard from "../public/components/Home/CommonCard";
import Footer from "../public/components/Footer";
import Link from 'next/link'
import {
  Text,
  Button,
  Box,
  Heading,
  Flex,
  Spacer,
  Stack,
  HStack,
  VStack,
  Center,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Heading size="2xl" align="center" height="36" mt={50}>
        สูตรทำอาหารล่าสุด
      </Heading>
      <VStack spacing={20} align="stretch">
        <CommonCard />
        <CommonCard />
        <CommonCard />
      </VStack>
      <Box height="20px"></Box>
      <Center>
        <Link href="/recipe">
          <Button  colorScheme="blue" variant="solid">
            ดูสูตรอาหารทั้งหมด
          </Button>
        </Link>
      </Center>
      <Box height="20px"></Box>
      <Footer />
    </Box>
  );
}
