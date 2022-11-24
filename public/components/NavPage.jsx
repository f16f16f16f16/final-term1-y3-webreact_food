import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Center,
} from "@chakra-ui/react";
import { FaBeer } from "react-icons/fa";

export default function NavPage() {
  return (
    <Center>
      <Breadcrumb spacing="8px" separator="|" fontSize="larger">
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">1</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">2</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">3</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Center>
  );
}
