import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
  Flex,
} from "@chakra-ui/react"
import {
  IoLogoGitlab,
  IoLogoGithub,
  IoLogoBitbucket,
  IoLogoDiscord,
} from "react-icons/io5"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { siteMetadataI } from "../ts/graphql"

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
  const data = useStaticQuery<siteMetadataI>(
    graphql`
      query {
        site {
          siteMetadata {
            name
            about
          }
        }
      }
    `
  )
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container maxW={"6xl"} py={4}>
        <Flex
          as={Stack}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text color={useColorModeValue("gray.600", "gray.500")}>
            © 2021 {data.site.siteMetadata.name}, this website under MIT license
          </Text>
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
        </Flex>

        <Text mt={5} color={useColorModeValue("gray.600", "gray.600")}>
          <Image
            mr={2}
            height="20px"
            objectFit="cover"
            src="https://resir014.xyz/_next/static/images/cc-by-nc-sa-35157979fe2560971c103dd439f23409.svg"
            alt="Segun Adebayo"
            display="inline-block"
          />
          Code and contents are licensed under CC-BY-NC-SA 4.0. Powered by
          Gatsbyjs, React, and Chakra-UI.
        </Text>
      </Container>
    </Box>
  )
}

// IoLogoGitlab,
//   IoLogoGithub,
//   IoLogoBitbucket,
//   IoLogoDiscord,
