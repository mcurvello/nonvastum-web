import { HStack, Image, Text, VStack } from "native-base";

import Title from "../../components/Title";
import Logo from "../../assets/images/logo2.png";
import Moto from "../../assets/images/moto.png";
import Waiters from "../../assets/images/waiters.png";
import Sofa from "../../assets/images/sofa.png";

export default function Home() {
  return (
    <VStack>
      <HStack justifyContent="center" alignItems="center" mb={12}>
        <VStack w={400} mr={100}>
          <Title fontSize="xl" color="primary">
            Reduza o desperdício e faça a <Text color="black">diferença!</Text>
          </Title>
          <Text fontSize="sm" color="black.100" mt={8}>
            Conectando supermercados, consumidores conscientes e instituições
            beneficentes.
          </Text>
        </VStack>
        <Image source={Logo} alt="Logo" size={480} resizeMode="contain" />
      </HStack>
      <VStack alignItems="center" mt={20}>
        <Title fontSize={16} color="primary">
          FAÇA PARTE
        </Title>
        <Title>Unindo Forças</Title>
        <HStack mt={32}>
          <VStack w={300} alignItems="center">
            <Image source={Sofa} alt="Logo" size={150} resizeMode="contain" />
            <Title mt={8} mb={4} fontSize="lg">
              Consumidor
            </Title>
            <Text textAlign="center">
              Compre produtos perto da validade com desconto ou faça uma doação
            </Text>
          </VStack>
          <VStack w={300} alignItems="center" ml={20} mr={20}>
            <Image source={Moto} alt="Logo" size={150} resizeMode="contain" />
            <Title mt={8} mb={4} fontSize="lg">
              Mercados
            </Title>
            <Text textAlign="center">Diminua o desperdício dos alimentos</Text>
          </VStack>
          <VStack w={300} alignItems="center">
            <Image
              source={Waiters}
              alt="Logo"
              size={150}
              resizeMode="contain"
            />
            <Title mt={8} mb={4} fontSize="lg">
              ONGs
            </Title>
            <Text textAlign="center">
              Encontre parceiros para receber doações de alimentos
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
