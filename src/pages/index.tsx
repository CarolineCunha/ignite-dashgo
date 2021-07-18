import Head from 'next/head'
import  { Flex, Button, Stack} from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';

type SingInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {

  const { register, handleSubmit, formState, errors } = useForm()

  const handleSignIn: SubmitHandler<SingInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve,2000));
  }
  return (
    <Flex 
    w="100vw" 
    h="100vh" 
    alignItems="center" 
    justifyContent="center">

      <Flex as="form" 
      width="100%" 
      maxWidth={360}
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
      onSubmit={handleSubmit(handleSignIn)}
      > 
      <Stack spacing="4">
        <Input name="email" type="email" label="E-mail" error= {errors.email} ref={register({required: 'E-mail obrigatório'})} /> 
        <Input name="password" type="password" label="Senha" ref={register} /> 
      </Stack>

      <Button type="submit" 
      mt="6" 
      colorScheme="pink"
      isLoading={formState.isSubmitting}
      >Entrar</Button>

      </Flex>

    </Flex>
  )
}
