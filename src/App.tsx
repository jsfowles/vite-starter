import React from 'react';
import { version } from '../package.json';

const Home = () => (
  <main className="flex min-h-screen flex-col items-center gap-32 bg-black p-[7vw] text-white">
    <div className="z-10 flex w-full max-w-prose flex-col items-center justify-between space-y-12 font-mono">
      <div className="">
        <a
          className="flex gap-2 "
          href="https://vectorform.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/vectorform.svg" alt="Vectorform Logo" width={90} />
        </a>
      </div>
      <h1 className="text-4xl">Vite Starter v{version}</h1>
      <p>
        Get started by editing{' '}
        <code className="font-mono font-bold">src/App.tsx</code>
      </p>
    </div>
  </main>
);

export default Home;
