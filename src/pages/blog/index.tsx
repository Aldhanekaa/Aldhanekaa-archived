import React from "react"
import {
  Flex,
  chakra,
  Box,
  useColorModeValue,
  HStack,
  Button,
  Divider,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  Heading,
  GridItem,
  Input,
  SimpleGrid,
  Text,
  Wrap,
  WrapItem,
  Tag,
  VisuallyHidden,
  SpaceProps,
  VStack,
  Stack,
  Link,
} from "@chakra-ui/react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { BlogPost } from "../../ts/graphql"

interface IBlogTags {
  tags: Array<string>
  marginTop?: SpaceProps["marginTop"]
}

const BlogTags: React.FC<IBlogTags> = props => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map(tag => {
        return (
          <Link href={`/blog/tag/${tag}`}>
            <Tag size={"md"} variant="solid" colorScheme="blue" key={tag}>
              {tag}
            </Tag>
          </Link>
        )
      })}
    </HStack>
  )
}

interface BlogAuthorProps {
  date: Date
  name: string
}

export const BlogAuthor: React.FC<BlogAuthorProps> = props => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

interface LatestBlogPostI {
  slug?: {
    ne: string
  }
  title?: {
    ne: string
  }
}

export default function LatestBlogPost(props: LatestBlogPostI) {
  const blogPost = useStaticQuery<{
    allContentfulBlogPost: { edges: Array<{ node: BlogPost }> }
  }>(graphql`
    query {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            id
            titles
            slug
            cover {
              file {
                url
              }
            }
            createdAt(fromNow: true)
            description {
              description
            }
            content {
              content
            }
            tags
          }
        }
      }
    }
  `)
  return (
    <>
      <Box px={4} pt={32} pb={20} mx="auto">
        <Box
          w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
          textAlign={{ base: "left", md: "center" }}
          mx="auto"
        >
          <chakra.h1
            mb={3}
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight={{ base: "bold", md: "extrabold" }}
            color={useColorModeValue("gray.900", "gray.100")}
            lineHeight="shorter"
          >
            Aldhanekaa's Blog
          </chakra.h1>
          <chakra.p
            mb={6}
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.500"
            lineHeight="base"
          >
            We’re on a mission to bring transparency to finance. We charge as
            little as possible, and we always show you upfront. No hidden fees.
            No bad exchange rates. No surprises.
          </chakra.p>
          <SimpleGrid
            as="form"
            w={{ base: "full", md: 7 / 12 }}
            columns={{ base: 1, lg: 6 }}
            spacing={3}
            pt={1}
            mx="auto"
            mb={8}
          >
            <GridItem as="label" colSpan={{ base: "auto", lg: 4 }}>
              <VisuallyHidden>Your Email</VisuallyHidden>
              <Input
                mt={0}
                size="lg"
                type="text"
                placeholder="What are you looking for?"
              />
            </GridItem>
            <Button
              as={GridItem}
              w="full"
              variant="solid"
              colSpan={{ base: "auto", lg: 2 }}
              size="lg"
              bg={useColorModeValue("gray.500", "gray.600")}
              type="submit"
              colorScheme="brand"
            >
              Search
            </Button>
          </SimpleGrid>
        </Box>
      </Box>
      <Box>
        <div className="container my-5">
          <Wrap spacing="30px" marginTop="5" justifyContent="center">
            {blogPost.allContentfulBlogPost.edges.map(post => (
              <WrapItem
                mt={20}
                width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}
              >
                <Box w="100%">
                  <Box borderRadius="lg" overflow="hidden">
                    <Link
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}
                    >
                      <Image
                        transform="scale(1.0)"
                        src={post.node.cover.file.url}
                        alt="some text"
                        objectFit="contain"
                        width="100%"
                        transition="0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                        }}
                      />
                    </Link>
                  </Box>
                  <BlogTags tags={post.node.tags} marginTop="3" />
                  <Heading fontSize="2xl" marginTop="2">
                    <GatsbyLink to={`/blog/${post.node.slug}`}>
                      <Link
                        textDecoration="none"
                        _hover={{ textDecoration: "none" }}
                      >
                        {post.node.titles}
                      </Link>
                    </GatsbyLink>
                  </Heading>
                  <Text as="p" fontSize="md" marginTop="2">
                    {post.node.description.description}
                  </Text>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </div>
      </Box>
    </>
  )
}
