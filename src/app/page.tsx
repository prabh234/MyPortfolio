import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import AppReveal from "@/components/assets/intro";

export default function Home() {

  return (
    <AppReveal>
     <main className="flex flex-col items-center justify-center ">
     <div className="h-screen flex items-center justify-center ">
<SplitText
  text="Prabhjot Singh"
  className="text-9xl p-5 font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
    </div>
    <div className="">
      <h1 className="">Prabhjot Singh</h1>
    </div>
  </main>
</AppReveal>
  );
}


