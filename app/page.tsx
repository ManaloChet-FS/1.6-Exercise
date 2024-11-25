import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-svh">
      <h1 className="text-8xl font-semibold">Hello</h1>
      <p className="text-lg">Welcome to my static website!</p>
      <Image className="mt-2" src="/assets/cat.gif" width={220} height={220} priority={true} alt="A kitten repeatedly jumps for joy on its hind legs."/>
    </div>
  );
}
