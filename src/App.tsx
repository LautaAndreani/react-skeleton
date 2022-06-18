import { useEffect, useState } from 'react'
import './App.css'
import { Avatar, Box, Button, ButtonGroup, Heading, Link, Skeleton, Stack, Text, VStack } from '@chakra-ui/react'
import { userData } from './models/interfaces'
import SkeletonWrapper from './components/SkeletonWrapper'
import { ExternalLinkIcon } from '@chakra-ui/icons'

function App() {
  const [data, setData] = useState<userData>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(false)
    try {
      fetch('https://api.github.com/users/LautaAndreani')
        .then((res) => res.json())
        .then(setData)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
    setTimeout(() => {
      setIsLoading(true)
    }, 1500)
  }, [])

  return (
    <Box textAlign='center' minH='100vh' bg='#0d1117' color='whiteAlpha.900' display='flex' alignItems='center' justifyContent='center'>
      {!isLoading ? (
        <SkeletonWrapper />
      ) : (
        <VStack border='1px solid #30363d' borderRadius='5px' p={5} gap={2}>
          <Avatar size='lg' name='Lautaro Andreani' border='1px solid #30363d' src={data.avatar_url} />
          <Box>
            <Heading fontSize='xl' fontWeight={500}>
              {data.login}
            </Heading>
            <small>📍 {data.location}</small>
          </Box>
          <Stack>
            <Text color='whiteAlpha.800' padding='.2rem 1rem' fontWeight={500}>
              {data.bio}
            </Text>
            <Text as='small' color='whiteAlpha.800' padding='.2rem'>
              Working at {data.company} 👨‍💼
            </Text>
          </Stack>
          <ButtonGroup>
            <Link href={data.html_url} isExternal>
              <Button rightIcon={<ExternalLinkIcon />} bg='#1f6feb' _hover={{ bg: '#1b63d3' }} padding='10px 20px'>
                Github
              </Button>
            </Link>
            <Link href={data.blog} isExternal>
              <Button rightIcon={<ExternalLinkIcon />} bg='none' border='1px solid #30363d' _hover={{ bg: '#30363d' }} padding='10px 20px'>
                Portfolio
              </Button>
            </Link>
          </ButtonGroup>
        </VStack>
      )}
    </Box>
  )
}

export default App
