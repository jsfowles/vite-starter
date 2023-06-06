import { version } from '../package.json';

const Home = () => (
  <main className="bg-black text-white flex min-h-screen flex-col gap-32 p-[7vw] items-center">
    <div className="z-10 w-full flex flex-col space-y-12 items-center justify-between font-mono max-w-prose">
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
      <h1 className="text-4xl">Vite Starter v</h1>
      <p>
        Get started by editing{' '}
        <code className="font-mono font-bold">src/App.tsx</code>
      </p>
    </div>
  </main>
);

export default Home;
