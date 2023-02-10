import Link from "next/link";

export default function Navbar() {
  return (
      <div className={'grid grid-cols-2 flex justify-between p-2 mt-4 font-heebo font-medium text-white'}>
        <div>
            <span className={'font-notojp text-white hover:text-red-900 font-bold'}>こんにちは : Hello</span>
        </div>
        <div className={'flex gap-2 justify-evenly text-normal font-jb '}>
            <Link className={'text-white hover:text-zinc-400 '} href={'https://www.linkedin.com/in/dwi-setyo-aji/'} >Linkedin</Link>
            <Link className={'text-white hover:text-zinc-400 '} href={'https://github.com/dwissaaj'} >Github</Link>
            <Link className={'text-white hover:text-zinc-400 '} href={'https://public.tableau.com/app/profile/dwi.setyo.aji'} >Tableau</Link>
        </div>
      </div>
  )
}
