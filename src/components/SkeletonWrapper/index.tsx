import { HStack, Skeleton, SkeletonCircle, SkeletonText, Stack, VStack } from '@chakra-ui/react'

function SkeletonWrapper() {
  return (
    <Stack p={8} minW='25rem' border='1px solid #30363d' borderRadius='md'>
      <SkeletonCircle size='20' margin='.3rem auto' />
      <VStack gap={1}>
        <SkeletonText noOfLines={1} w='10rem' />
        <SkeletonText noOfLines={1} w='10rem' />
        <SkeletonText noOfLines={1} w='20rem' p='1rem' />
        <SkeletonText noOfLines={1} w='10rem' />
      </VStack>
      <HStack paddingTop={3} display='flex' justifyContent='center'>
        <Skeleton h='40px'>
          <SkeletonText noOfLines={1} w='7rem' h='40px' />
        </Skeleton>
        <Skeleton h='40px'>
          <SkeletonText noOfLines={1} w='7rem' h='40px' />
        </Skeleton>
      </HStack>
    </Stack>
  )
}

export default SkeletonWrapper
