import Link from "next/link";

export default function Navbar() {
  return (
      <div className={'grid grid-cols-2 flex justify-between p-2 font-mono font-medium text-white'}>
        <div>
            <span className={'font-mono font-bold'}>こんにちは</span>
        </div>
        <div className={'flex justify-evenly '}>
            <Link href={'#'} >Home</Link>
            <Link href={'#'} >About</Link>
            <Link href={'#'} >Contact</Link>
        </div>
      </div>
  )
}
