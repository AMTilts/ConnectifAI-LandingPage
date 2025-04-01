import Head from 'next/head';
// Assuming you have other sections or components
// import HeroSection from '../components/HeroSection';
import ImageGenerationSection from '../components/ImageGenerationSection'; // Import the new section

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Awesome Page</title>
        <meta name="description" content="Showcasing cool features" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Example: A preceding section */}
        <section className="h-screen bg-blue-200 dark:bg-blue-900 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center">Scroll Down</h1>
        </section>

        {/* The New Animated Image Generation Section */}
        <ImageGenerationSection />

        {/* Example: A subsequent section */}
        <section className="h-screen bg-green-200 dark:bg-green-900 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center">More Content Below</h1>
        </section>
      </main>
    </div>
  );
}
