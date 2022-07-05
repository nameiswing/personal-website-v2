import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'

export default function Main() {
    return (
        <>
            <Head>
                <title>Lemuel Enaldo: Web Dev</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Junior web developer's portfolio." />
            </Head>
            <main className="mx-auto max-w-6xl">
                <Hero />
            </main>
        </>
        
    )
}