import Accessories from "../../components/Accessories";
import Featured from "../../components/Featured";
import Hero from "../../components/Hero";

export default async function Home() {
  return (
    <main className="">
      <Hero/>
      <Featured/>
      <Accessories/>
    </main>
  );
}
