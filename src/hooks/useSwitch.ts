"use client"

interface Props {
    a: string;
    b: number;
}

export default function useSwitch({a,b}:Props) {
    console.log(a)
    console.log(b)
    return;
}