import RootLayout from "@/app/layout";
import './globals.css'
import Navbar from "@/app/component/navbar";
import ImageMe from "@/app/component/image";
export default function Home() {
  return (
   <RootLayout>
     <Navbar />
       <ImageMe />
   </RootLayout>
  )
}
