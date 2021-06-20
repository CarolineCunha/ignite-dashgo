import { Box, Flex, Heading, VStack, Divider, Input, SimpleGrid, HStack, Button } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export default function CreateUser() {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6" >
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>
                    <Divider my="6" borderColor="gray.700"/>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="name" label="Nome Completo" />
                            <Input name="email" label="E-mail" type="email" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="password" label="Senha" type="password" />
                            <Input name="password_confirmation" label="Confirmação da senha" type="password" />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>

        </Box>
    )
}