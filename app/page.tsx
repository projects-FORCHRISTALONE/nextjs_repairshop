// ALL THANKS AND GLORY TO THE AND my ONLY GOD AND LORD JESUS CHRIST ALONE
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-cover bg-home-img bg-center  bg-black'>
      <main className='flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh'>
        <div className='flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl'>
          <h1 className='text-4xl font-bold'>Salvation&apos;s Computer <br /> Repairshop</h1>
          <address>
            555 Gateway Lane <br />
            Kansas City, KS 5555
          </address>
          <p>
            Open Daily: 9am to 5pm
          </p>
          <Link href={"tel:+2349049092821"} className='hover:underline'>
            0904-909-2821
          </Link>
        </div>
      </main>
    </div>
  );
}
