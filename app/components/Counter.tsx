'use client'

import { useAtom } from "jotai";
import { countAtom } from "../config/atom";

export default function Counter() {
    const [count, setCount] = useAtom(countAtom);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    )
}