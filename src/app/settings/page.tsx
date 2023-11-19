import Link from 'next/link';

export default function Settings() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="z-10 w-full max-w-5xl items-center  justify-between font-mono text-sm lg:flex">
        <p>Settings</p>
        <Link href="/">Home</Link>
      </div>
    </main>
  );
}
