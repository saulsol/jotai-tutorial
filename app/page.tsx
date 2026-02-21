import Image from "next/image";
import Counter from "./components/Counter";
import CounterCopy from "./components/CounterCopy";

export default function Home() {
  return (
    <>
      <Counter/> {/* Counter component */}
      <CounterCopy/>
    </>
  )

}
   