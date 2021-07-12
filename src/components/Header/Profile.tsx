import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData ?: boolean;
}
export function Profile({ showProfileData = true}: ProfileProps) {
    return(
        <Flex align="center">
                    {showProfileData && (
                        <Box mr="4" textAlign="right">
                        <Text>Caroline Cunha</Text>
                        <Text color="gray.300" fontSize="small">caroline.cunha.b@hotmail.com</Text>
                    </Box>
                    )}
                    <Avatar size="md" name="Caroline Cunha" src="https://github.com/CarolineCunha.png" />
                </Flex>
    );
}