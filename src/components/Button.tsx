"use client"

interface Props {
c: string;
d: number;
}

export default function Button({c,d}: Props) {
    console.log(c);
    console.log(d);
    return <button></button>
}