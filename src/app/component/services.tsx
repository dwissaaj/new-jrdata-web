import Link from "next/link";

export default function Services() {
  return (
      <div className={'container mx-auto p-2'}>
        <h1 className={'text-white text-2xl font-jb '}>Services</h1>
          <div className={'grid grid-cols-3 gap-3 '}>
              <div className={'grid grid-rows-3 p-4 gap-0 bg-gray-800 hover:bg-gray-900  shadow-md shadow-slate-900 hover:shadow-lg hover:shadow-blueish'}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 fill-teal-800">
                      <path fillRule="evenodd" d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z" clipRule="evenodd" />
                  </svg>
                  <h3 className={'text-white font-mulish font-semibold'}>
                      <Link href={'/work'} >Language</Link>
                  </h3>
                  <p className={'text-white font-mulish font-light text-sm'}>For now I only speak Indonesian and English, at present I studying Japanese for as my third language</p>
              </div>
              <div className={'grid grid-rows-3 p-4 gap-0 bg-gray-800 hover:bg-gray-900  shadow-md shadow-slate-900 hover:shadow-lg hover:shadow-blueish'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 fill-teal-800">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
                </svg>
                <h3 className={'text-white font-mulish font-semibold '}>
                    <Link href={'/work'}> Front End Development </Link>
                </h3>
                <p className={'text-white font-mulish font-light text-sm'}>Develop front web app using Reactjs as framework with CSS Framework .</p>
            </div>

              <div className={'grid grid-rows-3 p-4 gap-0 bg-gray-800 hover:bg-gray-900 shadow-md shadow-slate-900 hover:shadow-lg hover:shadow-blueish'}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 fill-teal-800">
                      <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clipRule="evenodd" />
                  </svg>
                  <h3 className={'text-white font-mulish font-semibold'}>
                      <Link href={'/work'}>Data Analyst</Link>
                  </h3>
                  <p className={'text-white font-mulish font-light text-sm'}>Using BI Tools Tableau, Power BI, or Excel for solve business problem with multiple data source either finance, customer or logistic</p>
              </div>
              <div className={'grid grid-rows-3 p-4 gap-0 bg-gray-800 hover:bg-gray-900  shadow-md shadow-slate-900 hover:shadow-lg hover:shadow-blueish'}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 fill-teal-800">
                      <path d="M16.5 7.5h-9v9h9v-9z" />
                      <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clipRule="evenodd" />
                  </svg>
                  <h3 className={'text-white font-mulish font-semibold'}>
                      <Link href={'/work'}>Data Scientist</Link>
                  </h3>
                  <p className={'text-white font-mulish font-light text-sm'}>Even not really good at it sometimes I use pre trained model or create my own model with Python in company with Tensorflow </p>
              </div>
              <div className={'grid grid-rows-3 p-4 gap-0 bg-gray-800 hover:bg-gray-900  shadow-md shadow-slate-900 hover:shadow-lg hover:shadow-blueish'}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 fill-teal-800">
                      <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd" />
                  </svg>
                  <h3 className={'text-white font-mulish font-semibold'}>
                      <Link href={'/work'}>Digital Marketing</Link>
                  </h3>
                  <p className={'text-white font-mulish font-light text-sm'}>Academic research focus in social media big data communication using Google Analytic and NodeXL. For a moment I also a product photographer and videographer</p>
              </div>

              <div className={'grid grid-rows-3 p-4 gap-0 bg-gray-800 p-4 gap-3 disabled'}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 fill-teal-800">
                      <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                  </svg>
                  <h3 className={'text-white font-mulish font-semibold '}>
                      Back End Development
                  </h3>
                  <p className={'text-white font-mulish font-light text-sm'}>I am still learning back end to create API using Golang and Nestjs</p>
              </div>
          </div>
      </div>
  )
}
