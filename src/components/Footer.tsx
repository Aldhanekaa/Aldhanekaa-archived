import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react"
import {
  IoLogoGitlab,
  IoLogoGithub,
  IoLogoBitbucket,
  IoLogoDiscord,
} from "react-icons/io5"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import { ReactNode } from "react"

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        color: useColorModeValue("blackAlpha.500", "gray.500"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2021 Aldhaneka</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Gitlab"} href="https://gitlab.com/aldhanekaa">
            <IoLogoGitlab />
          </SocialButton>
          <SocialButton label={"Github"} href="https://github.com/aldhanekaa">
            <IoLogoGithub />
          </SocialButton>
          <SocialButton label={"Discord"} href={"#"}>
            <IoLogoDiscord />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}

// IoLogoGitlab,
//   IoLogoGithub,
//   IoLogoBitbucket,
//   IoLogoDiscord,
