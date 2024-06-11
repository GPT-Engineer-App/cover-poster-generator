import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, Radio, RadioGroup, Stack, Heading, Image } from "@chakra-ui/react";
import { FaMusic, FaFilm } from "react-icons/fa";

const Index = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [type, setType] = useState("album");
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setGenerated(true);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading>Album Cover and Movie Poster Generator</Heading>
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input placeholder="Subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
        <RadioGroup onChange={setType} value={type}>
          <Stack direction="row">
            <Radio value="album">Album Cover</Radio>
            <Radio value="poster">Movie Poster</Radio>
          </Stack>
        </RadioGroup>
        <Button leftIcon={type === "album" ? <FaMusic /> : <FaFilm />} colorScheme="teal" onClick={handleGenerate}>
          Generate
        </Button>
        {generated && (
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" textAlign="center" p={4} mt={4}>
            <Image src={type === "album" ? "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTcxODEyOTYxM3ww&ixlib=rb-4.0.3&q=80&w=1080" : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlcnxlbnwwfHx8fDE3MTgxMjk2MTN8MA&ixlib=rb-4.0.3&q=80&w=1080"} alt={type === "album" ? "Album Cover" : "Movie Poster"} />
            <Heading size="lg" mt={4}>
              {title}
            </Heading>
            <Text fontSize="md">{subtitle}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
