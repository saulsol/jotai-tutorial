'use client'

import { useAtom, useAtomValue} from "jotai";
import { countAtom } from "../config/Atom";

export default function Counter() {
    const [count, setCount] = useAtom(countAtom);

    return (
            <div>
                <p>Count: {useAtomValue(countAtom)}</p>
            </div>
    )
}