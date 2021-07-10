import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
export function Profile() {
    return(
        <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>Caroline Cunha</Text>
                        <Text color="gray.300" fontSize="small">caroline.cunha.b@hotmail.com</Text>
                    </Box>
                    <Avatar size="md" name="Caroline Cunha" src="https://github.com/CarolineCunha.png" />
                </Flex>
    );
}