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
    <main>
      {/* <h2>Total</h2> */}
      <Stats title="Worldwide" url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector />
    </main>
    <style jsx>{`
      display: flex;
      flex-direction: column;
      position: relative;
      min-width: 1px;
      max-width: 100%;
      flex: 1;
      justify-content: center;
      align-items: center;
    `}</style>
  </div>
);

export default Home;
