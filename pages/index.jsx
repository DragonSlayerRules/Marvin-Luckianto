/* eslint-disable @next/next/no-img-element */
import GtrCar from "@/public/components/GtrCar";
import one from "../public/asset/1.png";
import two from "../public/asset/2.png";
import three from "../public/asset/3.png";
import four from "../public/asset/4.png";
import five from "../public/asset/5.png";
import six from "../public/asset/6.png";
import logo from "../public/asset/logo.png";
import Head from "next/head";

export default function Home() {
  return (
    <mainp>
      <Head>
        <title>Marvin Luckianto</title>
        <meta name="description" content="Marvin Car Collection" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={logo.src} />
      </Head>
      {/* Header */}
      <div className="font-light bg-black/50  flex justify-center z-50 sticky top-0">
        <div className="container mx-auto flex px-4 py-2 text-base sm:text-2xl justify-between text-highlight top-0">
          <div>MARVIN LUCKIANTO</div>
          <a href="mailto:marvin.luckianto@student.umn.ac.id" target="_blank">
            CONTACT
          </a>
        </div>
      </div>
      {/* HERO */}
      <div className="relative">
        <div className=" flex flex-col aspect-[2/1] justify-end items-center w-full absolute">
          <div className="container mx-auto px-4 py-2 sm:py-4 sm:px-4">
            <div className="font-xl sm:text-3xl text-highlight/50 font-thin text-end">
              <span className="font-light">Paggani | </span>
              It's a cool car
            </div>
          </div>
        </div>
        <div className="aspect-[2/1] ">
          <GtrCar />
        </div>
      </div>

      <div className="bg-black/50">
        <div className="container mx-auto px-4 py-12 flex">
          <div>
            <div className="text-xl sm:text-4xl text-highlight">
              MARVIN LUCKIANTO
            </div>
            <div className="text-sm sm:text-xl text-secondary">
              3D Modeller & Animator
            </div>
            <div className="font-sx sm:text-2xl text-highlight font-light mt-1">
              Specialized in hard surface modelling and makes idea to reality!
              If you have a creative project in mind, let{"'"}s collaborate and
              make it a reality.
            </div>
          </div>
        </div>
      </div>
      <div className=" sm:mx-auto relative w-full">
        <div className="relative">
          <div className="text-highlight absolute z-10 flex flex-col items-end justify-end  aspect-[2/1] w-full p-4 sm:p-8">
            <div className="font-xl sm:text-3xl mt-1 text-highlight/50 font-thin text-end">
              <span className="font-light">VW Beetle | </span>
              It's also a cool car
            </div>
          </div>
        </div>
        <video className="w-full aspect-[2/1] object-cover" autoPlay loop muted>
          <source src="/asset/file.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="bg-black/50">
        <div className="container mx-auto px-4 py-12 flex">
          <div className="mt-2 space-y-4">
            <div className="">
              <div className="text-xl sm:text-4xl text-highlight">
                3D Modeller and Animator
              </div>
              <div className="text-sm sm:text-lg text-secondary">
                December 2021 - Present
              </div>{" "}
              <div className="font-sx sm:text-2xl text-highlight/50 font-light mt-1">
                Done various 3D works as freelance
              </div>
            </div>
            <div className="">
              <div className="text-xl sm:text-4xl text-highlight">
                Background Artist
              </div>
              <div className="text-sm sm:text-lg text-secondary">
                July 2021 - December 2021
              </div>{" "}
              <div className="font-sx sm:text-2xl text-highlight/50 font-light mt-1">
                Worked on various backgrounds in Undying Will (2021)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <img src={one.src} alt="" className="aspect-[2/1]" />
        <img src={two.src} alt="" className="aspect-[2/1]" />
        <img src={three.src} alt="" className="aspect-[2/1]" />
        <img src={four.src} alt="" className="aspect-[2/1]" />
        <img src={five.src} alt="" className="aspect-[2/1]" />
        <img src={six.src} alt="" className="aspect-[2/1]" />
      </div>
      <div className="bg-black/50">
        <div className="container mx-auto p-4 flex">
          <div className="flex justify-end gap-5 w-full text-highlight ">
            <a href="mailto:marvin.luckianto@student.umn.ac.id" target="_blank">
              marvin.luckianto@student.umn.ac.id
            </a>
          </div>
        </div>
      </div>
    </mainp>
  );
}
