import React from "react"
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
  Link,
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
    <>
      <Box w="full" bg={useColorModeValue("gray.50", "gray.900")}>
        <Box
          maxW="7xl"
          w={{ md: "3xl", lg: "4xl" }}
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ lg: "space-between" }}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "gray.100")}
          >
            <chakra.span display="block">Want to work together?</chakra.span>
            <chakra.span
              display="block"
              color={useColorModeValue("gray.500", "gray.500")}
            >
              Feel Free To Reach Me.
            </chakra.span>
          </chakra.h2>
          <Stack
            direction={{ base: "column", sm: "row" }}
            mt={{ base: 8, lg: 0 }}
            shrink={{ lg: 0 }}
          >
            <Link
              w={40}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color={useColorModeValue("white", "gray.400")}
              bg={useColorModeValue("gray.500", "gray.600")}
              _hover={{
                color: useColorModeValue("gray.300", "gray.500"),
              }}
            >
              Discord
            </Link>
            {/* <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color={useColorModeValue("gray.500", "gray.600")}
              bg="white"
              _hover={{
                bg: "brand.50",
                color: useColorModeValue("gray.600", "gray.700"),
              }}
            >
              Email
            </Link> */}
          </Stack>
        </Box>
      </Box>

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
              © 2021 {data.site.siteMetadata.name}
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Gitlab"}
                href="https://gitlab.com/aldhanekaa"
              >
                <IoLogoGitlab />
              </SocialButton>
              <SocialButton
                label={"Github"}
                href="https://github.com/aldhanekaa"
              >
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
              alt="CC-BY-NC-SA 4.0 LICENSE"
              display="inline-block"
            />
            Code and contents are licensed under CC-BY-NC-SA 4.0. Powered by
            Gatsbyjs, React, Bootstrap 5.0, and Chakra-UI.
          </Text>
        </Container>
      </Box>
    </>
  )
}

// IoLogoGitlab,
//   IoLogoGithub,
//   IoLogoBitbucket,
//   IoLogoDiscord,
