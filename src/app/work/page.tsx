import RootLayout from "@/app/layout";

export default function Work() {
    return (
       <RootLayout>

           <div className={'w-screen h-screen flex grid justify-center items-center'}>
               <div className={'p-4 grid grid-rows-2 gap-0 justify-items-stretch  shadow hover:shadow-lg hover:shadow-red-900'}>
                   <svg className="w-16 h-16 justify-self-center fill-teal-900 hover:fill-red-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                       <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                   </svg>
                   <h1 className={'text-2xl font-jb text-white'}>All work is confidential, this feature still on my development</h1>
                   <div className={'grid grid-cols-2 flex justify-items-center mt-4'}>
                       <div>
                           <button disabled={true} className={'font-mulish text-white text-sm bg-teal-700 border border-transparent rounded-xl px-2 py-1'}>Login</button>
                       </div>
                       <div>
                           <button disabled={true} className={'font-mulish text-white text-sm bg-teal-700 border border-transparent rounded-xl px-2 py-1'}>Signup</button>
                       </div>
                   </div>
               </div>

           </div>

       </RootLayout>

    )
}
