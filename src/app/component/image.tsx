import Image from "next/image";
import pp from "../../../public/pp.png";
export default function ImageMe() {
  return (
      <div className={'grid grid-cols-2 flex justify-items-center'}>
        <div>
          <Image src={pp} alt={'profile'} width={300} height={300}  />
        </div>
        <div>
            <h1>Dwi Setyo Aji</h1>
        </div>
      </div>
  )
}
