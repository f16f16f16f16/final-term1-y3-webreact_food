import { Box, VStack, Text, Divider } from "@chakra-ui/react";
import Link from "next/link";

export default function ForumCata() {
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
          <Text ml="20px">หมวดอาหาร</Text>
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
              อาหารไทย
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
        <Box
          w="60%"
          h="60px"
          backgroundColor="#CBD5E0"
          fontSize="20px"
          color="black"
        >
          <Link href="#">
            <Text ml="60px" mt="14px">
              อาหารยุโรป
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
        <Box
          w="60%"
          h="60px"
          backgroundColor="#CBD5E0"
          fontSize="20px"
          color="black"
        >
          <Link href="#">
            <Text ml="60px" mt="14px">
              อาหารญี่ปุ่น
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
        <Box
          w="60%"
          h="60px"
          backgroundColor="#CBD5E0"
          fontSize="20px"
          color="black"
        >
          <Link href="#">
            <Text ml="60px" mt="14px">
              อาหารจีน
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
        <Box
          w="60%"
          h="60px"
          backgroundColor="#CBD5E0"
          fontSize="20px"
          color="black"
        >
          <Link href="#">
            <Text ml="60px" mt="14px">
              อาหารอินเดีย
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />

        <Box height="80px"></Box>
      </VStack>
      <VStack spacing={0}>
        <Box
          w="60%"
          h="100%"
          backgroundColor="#FC8181"
          fontSize="20px"
          color="black"
        >
          <Text ml="20px">ของหวาน</Text>
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
              ของมัน
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
        <Box
          w="60%"
          h="60px"
          backgroundColor="#CBD5E0"
          fontSize="20px"
          color="black"
        >
          <Link href="#">
            <Text ml="60px" mt="14px">
              ของคาว
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
        <Box
          w="60%"
          h="60px"
          backgroundColor="#CBD5E0"
          fontSize="20px"
          color="black"
        >
          <Link href="#">
            <Text ml="60px" mt="14px">
              ไม่อาว
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
        <Box
          w="60%"
          h="60px"
          backgroundColor="#CBD5E0"
          fontSize="20px"
          color="black"
        >
          <Link href="#">
            <Text ml="60px" mt="14px">
              พี่สะบัด
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
        <Box
          w="60%"
          h="60px"
          backgroundColor="#CBD5E0"
          fontSize="20px"
          color="black"
        >
          <Link href="#">
            <Text ml="60px" mt="14px">
              ก้นใส่
            </Text>
          </Link>
        </Box>
        <Divider w="60%" />
      </VStack>
    </Box>
  );
}
