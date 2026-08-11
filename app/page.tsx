import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectDisplay from "./components/ProjectDisplay";
import WorkDisplay from "./components/WorkDisplay";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-400 pb-25 w-full">
        <section className="py-12.5 px-6 sm:px-10 lg:px-20 xl:px-37.5">
          <Hero />
        </section>
        <section className="py-12.5 px-6 sm:px-10 lg:px-20 xl:px-37.5">
          <ProjectDisplay />
        </section>
        <section className="py-12.5 px-6 sm:px-10 lg:px-20 xl:px-37.5">
          <WorkDisplay />
        </section>
      </div>

      <section>
        <Footer />
      </section>
    </main>
  );
}
