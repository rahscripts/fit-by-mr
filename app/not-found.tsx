import Link from "next/link"


export default function NotFound() {


    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            Oops not found! Lets goo to homepage
            <button className="bg-gray-500 text-white px-2 p-1 cursor-pointer rounded m-1 ">
                <Link href={"/"}>
                Home</Link>
            </button>
        </div>
    )
}