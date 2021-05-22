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

import { useStaticQuery, graphql } from "gatsby"
import { siteMetadataI } from "../ts/graphql"

interface IBlogTags {
  tags: Array<string>
  marginTop?: SpaceProps["marginTop"]
}

const BlogTags: React.FC<IBlogTags> = props => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map(tag => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
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

function Home() {
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
      <Flex px={4} py={32} mx="auto">
        <Box
          mt={20}
          w="full"
          mx="auto"
          // @ts-ignore
          w={{ sm: "80%", lg: "70%", xl: "80%" }}
        >
          <chakra.p
            mb={2}
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="wide"
            color="gray.400"
            textTransform="uppercase"
          >
            Hello there 👋, my name is
          </chakra.p>
          <chakra.h1
            mb={3}
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "white")}
          >
            {data.site.siteMetadata.name}
          </chakra.h1>
          <chakra.p mb={5} color="gray.500" width="60%" fontSize={{ md: "lg" }}>
            {data.site.siteMetadata.about}
          </chakra.p>
          <HStack>
            <Link href="/about">
              <Button
                as="div"
                w={{ base: "full", sm: "auto" }}
                variant="solid"
                colorScheme="blue"
                size="lg"
                _hover={{
                  color: useColorModeValue("", "gray.500"),
                  cursor: "pointer",
                }}
                mb={{ base: 2, sm: 0 }}
              >
                About
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                as="div"
                w={{ base: "full", sm: "auto" }}
                mb={{ base: 2, sm: 0 }}
                _hover={{
                  color: useColorModeValue("", "gray.500"),
                  cursor: "pointer",
                }}
                variant="solid"
                colorScheme="gray"
                size="lg"
              >
                Read My Blog
              </Button>
            </Link>
          </HStack>
        </Box>
      </Flex>

      <section className="mt-5">
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
                Open Source Projects
              </chakra.h3>
              <chakra.p
                mb={5}
                color={useColorModeValue("gray.600", "white")}
                fontSize={{ md: "lg" }}
              >
                Today every company needs apps to engage their customers and run
                their businesses. Step up your ability to build, manage, and
                deploy great apps at scale with us.
              </chakra.p>
            </div>
          </div>
        </Box>
        <div className="container my-5">
          <Tabs isManual variant="enclosed">
            <TabList>
              <Tab>Website Projects</Tab>
              <Tab>Backend Projects</Tab>
              <Tab>Python Projects</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex mt={10} flexDirection="column" ga mx="auto">
                  <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg overflow-hidden">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                      <chakra.h3
                        mb={3}
                        fontSize={{ base: "3xl", md: "4xl" }}
                        fontWeight="bold"
                        lineHeight="shorter"
                        color={useColorModeValue("gray.900", "white")}
                      >
                        Quran Hub
                      </chakra.h3>
                      <chakra.p
                        mb={5}
                        color={useColorModeValue("gray.500", "white")}
                        fontSize={{ md: "lg" }}
                      >
                        Today every company needs apps to engage their customers
                        and run their businesses. Step up your ability to build,
                        manage, and deploy great apps at scale with us.
                      </chakra.p>
                      <div className="d-grid mt-3 gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                        >
                          Read
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-lg px-4"
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 offset-lg-1 p-md-0 overflow-hidden shadow-lg"
                      style={{ transform: "scale(1.2)" }}
                    >
                      <img
                        className="rounded-lg-3"
                        src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-docs.png"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="row p-4 pb-0 pe-lg-0 mt-5 pt-lg-5 align-items-center rounded-3 border shadow-lg overflow-hidden ">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                      <chakra.h3
                        mb={3}
                        fontSize={{ base: "3xl", md: "4xl" }}
                        fontWeight="bold"
                        lineHeight="shorter"
                        color={useColorModeValue("gray.900", "white")}
                      >
                        MTs TechnoNatura Website
                      </chakra.h3>
                      <chakra.p
                        mb={5}
                        color={useColorModeValue("gray.500", "white")}
                        fontSize={{ md: "lg" }}
                      >
                        Today every company needs apps to engage their customers
                        and run their businesses. Step up your ability to build,
                        manage, and deploy great apps at scale with us.
                      </chakra.p>
                      <div className="d-grid mt-3 gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                        >
                          Read
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-lg px-4"
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 offset-lg-1 p-md-0 overflow-hidden shadow-lg"
                      style={{ transform: "scale(1.2)" }}
                    >
                      <img
                        className="rounded-lg-3"
                        src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-docs.png"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </Flex>
              </TabPanel>
              <TabPanel>
                <p>Here is my backend projects</p>
              </TabPanel>
              <TabPanel>
                <p>Here is my python projects</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </section>
      <section className="mt-5">
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
                Open Source Projects
              </chakra.h3>
              <chakra.p
                mb={5}
                color={useColorModeValue("gray.600", "white")}
                fontSize={{ md: "lg" }}
              >
                Today every company needs apps to engage their customers and run
                their businesses. Step up your ability to build, manage, and
                deploy great apps at scale with us.
              </chakra.p>
            </div>
          </div>
        </Box>
        <div className="container my-5">
          <Wrap spacing="30px" marginTop="5" justifyContent="center">
            <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
              <Box w="100%">
                <Box borderRadius="lg" overflow="hidden">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Image
                      transform="scale(1.0)"
                      src={
                        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                      }
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
                <BlogTags tags={["Engineering", "Product"]} marginTop="3" />
                <Heading fontSize="2xl" marginTop="2">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    Some blog title
                  </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </Box>
            </WrapItem>
            <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
              <Box w="100%">
                <Box borderRadius="lg" overflow="hidden">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Image
                      transform="scale(1.0)"
                      src={
                        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                      }
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
                <BlogTags tags={["Engineering", "Product"]} marginTop="3" />
                <Heading fontSize="2xl" marginTop="2">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    Some blog title
                  </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </Box>
            </WrapItem>
            <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
              <Box w="100%">
                <Box borderRadius="lg" overflow="hidden">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Image
                      transform="scale(1.0)"
                      src={
                        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                      }
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
                <BlogTags tags={["Engineering", "Product"]} marginTop="3" />
                <Heading fontSize="2xl" marginTop="2">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    Some blog title
                  </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </Box>
            </WrapItem>
          </Wrap>
        </div>
      </section>

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
              Discord
            </Link>
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
              color={useColorModeValue("gray.500", "gray.600")}
              bg="white"
              _hover={{
                bg: "brand.50",
                color: useColorModeValue("gray.600", "gray.700"),
              }}
            >
              Learn More
            </Link>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default Home
