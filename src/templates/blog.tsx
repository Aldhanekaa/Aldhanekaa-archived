import React from "react"
import ReactMarkdown from "react-markdown"
import {
  Box,
  chakra,
  Container,
  Flex,
  Button,
  VStack,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  Divider,
  useColorModeValue,
  useBreakpointValue,
  AspectRatio,
  Image,
  UnorderedList,
  ListItem,
  Spacer,
  Avatar,
  HStack,
} from "@chakra-ui/react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { siteMetadataI } from "../ts/graphql"

interface BlogPostI {
  pageContext: {
    rawMarkdownBody: string
    title: string
    birthtime: string
    photo: string
    desc: string
  }
}
const BlogPost = ({
  pageContext: { rawMarkdownBody, title, birthtime, photo, desc },
  ...other
}: BlogPostI) => {
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
      <Container paddingTop={150}>
        <Text
          fontWeight={700}
          lineHeight={1.2}
          as="h1"
          color={useColorModeValue("gray.800", "gray.200")}
          fontSize={useBreakpointValue({
            base: "3xl",
            md: "4xl",
            lg: "6xl",
          })}
        >
          {title}
        </Text>
        <HStack spacing="24px">
          <Stack direction="row" w="200px" alignItems="center">
            <Avatar
              size="sm"
              name={data.site.siteMetadata.name}
              src={data.site.siteMetadata.avatar}
            />

            <Link to="/about">
              <Text
                fontWeight={600}
                mb={5}
                mt={5}
                as="h1"
                color={useColorModeValue("gray.600", "gray.500")}
                fontSize={useBreakpointValue({
                  base: "3sm",
                  sm: "4sm",
                  md: "xl",
                  lg: "2xl",
                })}
              >
                {data.site.siteMetadata.name}
              </Text>
            </Link>
          </Stack>
          <Box w="170px" h="10" />
          <Box w="180px" h="10" />
        </HStack>
      </Container>
      <Box
        paddingTop={10}
        className="container"
        style={{ boxSizing: "border-box" }}
        px={useBreakpointValue({ base: "25px", md: "100px" })}
      >
        <Image src={photo} alt="naruto" objectFit="cover" />

        <Divider />
        <ReactMarkdown
          components={{
            h1: ({ node, children }) => (
              <Text
                color="black"
                fontWeight={700}
                lineHeight={1.2}
                mb={5}
                mt={5}
                as="h1"
                fontSize={useBreakpointValue({
                  base: "3xl",
                  md: "4xl",
                  lg: "5xl",
                })}
              >
                {children}
              </Text>
            ),
            h2: ({ node, children }) => (
              <Text
                color="black"
                fontWeight={700}
                lineHeight={1.2}
                mt={5}
                mb={5}
                fontSize={useBreakpointValue({ base: "1xl", md: "3xl" })}
              >
                {children}
              </Text>
            ),
            h3: ({ node, children }) => (
              <Text
                color="black"
                fontWeight={700}
                lineHeight={1.2}
                mt={4}
                mb={4}
                fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
              >
                {children}
              </Text>
            ),
            p: ({ node, children }) => (
              <Text
                color="blackAlpha.700"
                fontWeight={400}
                lineHeight={1.2}
                mt={2}
                mb={2}
                fontSize={useBreakpointValue({ base: "1xl", md: "1xl" })}
              >
                {children}
              </Text>
            ),
            li: ({ node, children }) => {
              return <li>{children}</li>
            },
            ul: ({ node, children }) => (
              <UnorderedList pr={5} children={children} />
            ),
            ol: ({ node, children }) => (
              <UnorderedList pr={5} children={children} />
            ),
          }}
          className="mb-4 prose lg:prose-lg dark:prose-dark"
          skipHtml={false}
          children={rawMarkdownBody}
        />
      </Box>
    </>
  )
}

export default BlogPost
