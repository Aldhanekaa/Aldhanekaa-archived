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
} from "@chakra-ui/react"

export default function Home() {
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
            Aldhanekaa
          </chakra.h1>
          <chakra.p mb={5} color="gray.500" fontSize={{ md: "lg" }}>
            Today every company needs apps to engage their customers and run
            their businesses. Step up your ability to build, manage, and deploy
            great apps at scale with us.
          </chakra.p>
          <HStack>
            <Button
              as="a"
              w={{ base: "full", sm: "auto" }}
              variant="solid"
              colorScheme="blue"
              size="lg"
              mb={{ base: 2, sm: 0 }}
            >
              About
            </Button>
            <Button
              as="a"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
            >
              Read My Blog
            </Button>
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
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </section>
    </>
  )
}
