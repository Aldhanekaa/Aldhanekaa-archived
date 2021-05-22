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
  Text,
  Wrap,
  WrapItem,
  Tag,
  SpaceProps,
  VStack,
  Stack,
  Link,
} from "@chakra-ui/react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { BlogPost } from "../ts/graphql"

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
      allContentfulBlogPost(
        sort: { fields: createdAt, order: DESC }
        limit: 3
      ) {
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
      <Box mt={50}>
        <Box
          w="full"
          mx="auto"
          // @ts-ignore
          w={{ sm: "80%", lg: "70%", xl: "80%" }}
        >
          <div className="row mb-10">
            <div className="col-md-8">
              <chakra.h3
                mb={3}
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                lineHeight="shorter"
                color={useColorModeValue("gray.900", "white")}
              >
                Latest Blog Post
              </chakra.h3>
              <chakra.p
                mb={5}
                color={useColorModeValue("gray.600", "white")}
                fontSize={{ md: "lg" }}
              >
                Read Aldhaneka's latest post on his blog page
              </chakra.p>
            </div>
          </div>
        </Box>
        <div className="container my-5">
          <Wrap spacing="30px" marginTop="5" justifyContent="center">
            {blogPost.allContentfulBlogPost.edges.map(post => (
              <WrapItem
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
          <Box w="full">
            <Box
              maxW="7xl"
              w={{ md: "3xl", lg: "4xl" }}
              mx="auto"
              py={{ base: 12, lg: 16 }}
              px={{ base: 4, lg: 8 }}
              display={{ lg: "flex" }}
              alignItems={{ lg: "center" }}
              justifyContent={{ lg: "center" }}
            >
              <GatsbyLink to="/blog">
                <Link
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
                  color={useColorModeValue("white", "gray.400")}
                  bg={useColorModeValue("gray.500", "gray.600")}
                  _hover={{
                    color: useColorModeValue("gray.300", "gray.500"),
                  }}
                >
                  See More Blog Posts
                </Link>
              </GatsbyLink>
            </Box>
          </Box>
        </div>
      </Box>
    </>
  )
}
