import Link from "next/link"

export default function Home() {
    return <div>
    Welcome to fitness app developed by MRahman 
    <Link href={'/fit'}>
        <button>
            Lets go</button>
    </Link></div>
}