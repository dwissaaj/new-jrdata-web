import Image from "next/image";
import pp from "../../../public/porfile.jpg";
import Link from "next/link";
export default function ImageMe() {
  return (
      <div className={'container mx-auto mt-4 p-2 '}>
          <h1 className={'text-white text-2xl font-jb '}>Who am I?</h1>
          <div className={'grid grid-cols-2 mt-2 gap-4'}>

             <div className={'justify-self-center border-solid border-2 border-teal-900'}>
                <Image className={''} src={pp} alt={"profile"} width={250} height={250} />
            </div>
             <div className={''}>
                <div className={''}>
                    <p className={' text-white shadow-sm hover:shadow-xl hover:shadow-slate-500 font-mulish font-semibold text-2xl border-b-2'}>I&apos;m Dwi Setyo Aji,a data analyst and front end developer</p>
                </div>
                <div className={' shadow-sm shadow-zinc-800 hover:shadow-lg hover:shadow-teal-900 bg-gray-900 p-2 mt-2'}>
                    <p className={'text-white font-mulish font-light text-sm '}>I am a fresh graduate from UPN Veteran Jatim Communication Science Major. My research is focusing
                    on social media and business using BI Tools like Tableau, Power BI, or NodeXL. Currently develop passion in front end development</p>
                </div>
                 <div className={'grid grid-cols-2 gap-2 mt-4 flex justify-around '}>
                    <div className={'grid grid-rows-2 gap-2'}>
                        <button className={'shadow-sm shadow-zinc-800 hover:shadow-blue-300  border rounded-full border-transparent bg-teal-900 hover:bg-sky-800 text-white font-mulish font-light text-sm '}>
                            <a rel={'noreferrer'} target="_blank" href={'https://drive.google.com/drive/folders/13jNXBZnhBEzsT4ZqBIwTbOj_z3TohPuy?usp=share_link'}>Gdrive</a>
                        </button>
                        <button className={'shadow-sm shadow-zinc-800 hover:shadow-blue-300 border rounded-full border-transparent bg-teal-900 hover:bg-sky-800 text-white font-mulish font-light text-sm '}>
                            <a href={'mailto: dwisetyoaji@jrdataanalyst.com'}>Email</a>
                        </button>
                    </div>
                     <div className={'grid grid-rows-2 gap-2'}>
                         <button className={'shadow-sm shadow-zinc-800 hover:shadow-blue-300 border rounded-full border-transparent bg-teal-900 hover:bg-sky-800 text-white font-mulish font-light text-sm '}>
                             <a href={'https://wa.link/adrijk'}>Whatsapp</a>
                         </button>
                         <button className={'shadow-sm shadow-zinc-800 hover:shadow-blue-300 border rounded-full border-transparent bg-teal-900 hover:bg-sky-800 text-white font-mulish font-light text-sm '}>
                             <a rel={'noreferrer'} target="_blank" href={'https://drive.google.com/file/d/1Y32peT-6uht5J6xI3uhrTegXHR7VLkUD/view?usp=share_link'}>Download CV</a>
                         </button>
                     </div>

                 </div>
             </div>
         </div>

      </div>
  )
}

//
// <Link className={'font-inter text-md text-white font-light '} href={'https://www.linkedin.com/in/dwi-setyo-aji/'}>
//     <button className={'border-2 px-4 py-1 text-sm font-inter border-sky-700 rounded-3xl'}>
//         Linkedin
//     </button>
// </Link>
// <Link className={'font-inter text-md text-white font-light '} href={'https://www.linkedin.com/in/dwi-setyo-aji/'}>
//     <button className={'border-2 px-4 py-1 text-sm font-inter border-sky-700 rounded-3xl'}>
//         Linkedin
//     </button>
// </Link>