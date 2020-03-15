import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Stats } from '../components/Stats';
import { CountrySelector } from '../components/CountrySelector';

interface Props {}

const Home: NextPage<Props> = () => (
  <div>
    <Head>
      <title>COVID-19 Stats</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Stats
      title="Covid-19 Worldwide"
      url="https://covid19.mathdro.id/api"
    ></Stats>
    <CountrySelector />
  </div>
);

export default Home;
