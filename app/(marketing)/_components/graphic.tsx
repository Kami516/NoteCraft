import Image from "next/image";

export const Graphic = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="mb-[-50px] mx-auto relative w-[350px] h-[175px] sm:w-[450px] sm:h-[225px] md:w-[900px] md:h-[320px]">
          <Image
            src="/noteraft-minimal-light-improved.svg"
            fill
            className="object-contain dark:hidden"
            alt="Documents"
          />
          <Image
            src="/noteraft-minimal-dark-improved.svg"
            fill
            className="object-contain hidden dark:block"
            alt="Documents"
          />
        </div>
      </div>
    </div>
  )
}