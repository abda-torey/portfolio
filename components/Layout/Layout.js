import Header from "./Header";
import { Box } from "@chakra-ui/react";
export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
}
