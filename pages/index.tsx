import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Center, Flex } from '@chakra-ui/react';
import { Navigation } from '../components/navigation';
import { Layout } from '../components/Layout';

const Home = () => {
  return (
    <Layout px={20}>
      <Head>
        <title>Karlen Misakyan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center w={'100%'}>
        <Navigation />
      </Center>
    </Layout>
  );
};

export default Home;
