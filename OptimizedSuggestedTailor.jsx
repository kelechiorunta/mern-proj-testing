import * as React from "react";

function OptimizedSuggestedTailor() {
  return (
    <div className="flex flex-col container max-w-full">
      <div className="flex container max-w-full overflow-hidden flex-col pt-6 pb-96 w-full bg-white max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col px-6 w-full max-md:px-5 max-md:max-w-full">
          <Desktop7_Header />
          <Desktop7_Search />
        </div>
        <div className="self-center mt-3.5 mb-0 w-full max-w-[1357px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <Desktop7_Dashboard     />
            <Desktop7_ViewSection     />
          </div>
        </div>
      </div>
    </div>
  );
}
export default OptimizedSuggestedTailor


    function Desktop7_Header({}) {
      return (<div className="flex gap-2 max-md:flex-wrap">
            <img alt="simuverse_logo" sizes="100w, 200w, 400w, 800w, 1200w, 1600w, 2000w" loading="lazy" src="/ae066e8ca0e9538445b9a86f5b9d70f31ddfdca2e9020efb93365e7fae2a9faf.png" width={1000} height={1000} className="object-contain shrink-0 min-w-[19.4%] aspect-[3.09] basis-0 grow-0 w-fit" />
            <div className="flex items-center justify-end gap-x-[100px] container max-w-[80%] py-2.5 pr-5 pl-20 bg-red-500 rounded-md max-md:pl-5">
              <div className="flex overflow-hidden relative items-center justify-center rounded-full w-[72px] h-[72px]">
                <img alt="Replace with an informative alt text" sizes="100w, 200w, 400w, 800w, 1200w, 1600w, 2000w" loading="lazy" src="/bd342aa9e60c1ac13d5357faba0f87d1382e294fbb0779c3d6e7d783b7158128.png" width={1000} height={1000} className="object-contain inline-block shrink-0 rounded-full aspect-square min-w-[72px] h-[72px]" />
              </div>
              <div className="flex relative items-center justify-center rounded-full w-[72px] h-[72px]">
                <img alt="Replace with an informative alt text" sizes="100w, 200w, 400w, 800w, 1200w, 1600w, 2000w" loading="lazy" src="/8b74e9411b1b1f690dc9c8911d197750848138827f7022a22cfb59ac21245187.png" width={1000} height={1000} className="object-cover relative inset-0 size-full w-[72px] h-[72px]" />
                <div className="flex absolute top-[70%] left-[70%] shrink-0 bg-green-500 rounded-full border-2 border-white border-solid h-[23px] w-[23px]" />
              </div>
            </div>
          </div>);
    }

    function Desktop7_Dashboard({}) {
      return (<div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full text-base font-medium text-center text-teal-900 max-md:mt-10">
                <div className="flex flex-col items-start pr-12 pl-4 w-full max-md:pr-5">
                  <button className="flex gap-3 whitespace-nowrap w-full -ml-4 -mb-3.5 hover:bg-red-400 px-4 py-3.5 rounded-md hover:text-white hover:transition-all duration-500 ease-in-out">
                    <img alt="profile" loading="lazy" src="/0cf49daeab220e681877aab771a91450a19bc6cda4a7b25a8d598f2685f7b815.svg" width={20} height={20} className="object-contain shrink-0 my-auto w-5 aspect-square hover:bg-white" />
                    <button className="w-auto ">Profile</button>
                  </button>
                  <button className="flex gap-3 whitespace-nowrap container w-max mt-6 -ml-4 -mb-3.5 hover:bg-red-400 px-4 py-3.5 rounded-md hover:text-white hover:transition-all duration-500 ease-in-out">
                  {
          /* // className="flex gap-3 mt-9"> */
        }
                <img alt="body_measurements" loading="lazy" 
                    src="/eb79cee6eb36f52363322c296993bbb4d3ba1da6722c2df72261a52d33fb009c.svg" 
                    width={20} height={20} className="object-contain shrink-0 my-auto w-5 aspect-square" />
                    <div className="basis-auto w-full">Body Measurements</div>
                  </button>
                  <button className="flex gap-3 whitespace-nowrap container w-max mt-6 -ml-4 -mb-3.5 hover:bg-red-400 px-4 py-3.5 rounded-md hover:text-white hover:transition-all duration-500 ease-in-out">
                  {
          /* className="flex gap-3 mt-9"> */
        }
                    <img alt="account_settings" loading="lazy" src="/67a13b91c5bcfa0108b559439cce6dbdb0bd335533ff3a28b77a2c9ef4ecb8c7.svg" width={20} height={20} className="object-contain shrink-0 self-start mt-1 w-5 aspect-square" />
                    <div className="basis-auto">Account Settings</div>
                  </button>
                  <button className="flex gap-3 whitespace-nowrap container w-full mt-6 -ml-4 -mb-3.5 hover:bg-red-400 px-4 py-3.5 rounded-md hover:text-white hover:transition-all duration-500 ease-in-out">
                  {
          /* className="flex gap-3 mt-8 whitespace-nowrap"> */
        }
                    <img alt="orders" loading="lazy" src="/7f7a84b9af77f45e9a96be63ecb0e674b951e2b8e3fc928da593140d5b0bb6a2.svg" width={20} height={20} className="object-contain shrink-0 my-auto w-5 aspect-square" />
                    <div>Orders</div>
                  </button>
                </div>
                <div className="flex gap-3 px-4 py-3.5 mt-6 text-white bg-red-500 rounded-md">
                  <img alt="tailor_recommendations" loading="lazy" src="/5264666884ae38448ad1793f76388abf93a3b5501a6f4bf051157a90195fe2b8.svg" width={22} height={16} className="object-contain shrink-0 my-auto w-5 aspect-[1.43]" />
                  <div className="grow shrink w-[194px]">
                    Tailor Recommendation
                  </div>
                </div>
                <div className="flex flex-col items-start mt-5 ml-4 max-w-full w-[140px] max-md:ml-2.5">
                  <button className="flex gap-3 whitespace-nowrap container w-max -mt-3 -ml-4 -mb-3.5 hover:bg-red-400 px-4 py-3.5 rounded-md hover:text-white hover:transition-all duration-500 ease-in-out">
                  {
          /* className="flex gap-3 self-stretch"> */
        }
                    <img alt="saved_tailors" loading="lazy" src="/b008e611690ffbeadc4ee28348e8b1194f57b84361beb34b405b8f4808ddd1d6.svg" width={20} height={20} className="object-contain shrink-0 self-start mt-1 w-5 aspect-square" />
                    <div className="grow shrink w-[104px]">Saved Tailors</div>
                  </button>
                  <button className="flex gap-3 whitespace-nowrap container w-full mt-5 -ml-4 -mb-3.5 hover:bg-red-400 px-4 py-3.5 rounded-md hover:text-white hover:transition-all duration-500 ease-in-out">
                  {
          /* // className="flex gap-3 mt-8 whitespace-nowrap"> */
        }
                    <img alt="support" loading="lazy" src="/3babca392b4e7f87c325e882d76c12a37355f767b54d9148a1005f5d25ddb195.svg" width={20} height={20} className="object-contain shrink-0 self-start mt-1 w-5 aspect-square" />
                    <div>Support</div>
                  </button>
                  <button className="flex gap-3 whitespace-nowrap container w-full mt-5 -ml-4 -mb-3.5 hover:bg-red-400 px-4 py-3.5 rounded-md hover:text-white hover:transition-all duration-500 ease-in-out">
                  {
          /* className="flex gap-3.5 mt-8 whitespace-nowrap"> */
        }
                    <img alt="logout" loading="lazy" src="/25162f4bb779e6e52943687541ddb9484a8c9215a6add02bb36738da1e3801dd.svg" width={16} height={19} className="object-contain shrink-0 my-auto w-4 aspect-[0.84]" />
                    <div>Logout</div>
                  </button>
                </div>
              </div>
            </div>);
    }
    
    function Desktop7_ViewSection({}) {
      return (<div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-2.5 w-full text-base font-medium text-center max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-10 px-5 py-3.5 text-white bg-red-500 rounded-md max-md:max-w-full">
                  <div>SNo</div>
                  <div>Tailor name</div>
                  <div>Ratings</div>
                  <div className="grow shrink w-[126px]">Address of tailor</div>
                  <div>Pincode</div>
                  <div className="grow shrink w-[115px]">Phone Number</div>
                </div>
                <div className="container border-2 flex gap-x-[75px] justify-start items-center mx-auto mt-3 w-full text-black whitespace-nowrap max-md:mr-2.5 max-md:max-w-full">
                  <div className="flex flex-col ml-7 ">
                    <div className="self-start">1</div>
                    <div className="mt-1">2</div>
                  </div>
                  <div className="flex flex-col">
                    <div>Name</div>
                    <div className="mt-1">Name</div>
                  </div>
                  <div className="flex flex-col">
                    <div>4.9/5</div>
                    <div className="mt-1">4.0/5</div>
                  </div>
                  <div className="flex flex-col ml-[80px]">
                    <div>Address</div>
                    <div className="mt-1">Address</div>
                  </div>
                  <div className="flex flex-col ml-[90px]">
                    <div>12345</div>
                    <div className="mt-1">12345</div>
                  </div>
                  <div className="flex flex-col ml-[65px]">
                    <div>1234567890</div>
                    <div className="mt-1">1234567890</div>
                  </div>
                </div>
              </div>
            </div>);
    }
  
    function Desktop7_Search({}) {
      return (<div className="flex flex-wrap gap-3.5 self-end mt-4 w-full max-w-[1083px] max-md:max-w-full">
            <div className="container max-w-[18.5%] shrink my-auto text-xl font-semibold text-center basis-auto grow-0 text-teal-900 text-opacity-50">
              Suggested Tailors
            </div>
            <div className="container max-w-[80%] flex flex-wrap flex-auto gap-10 justify-center items-center px-2.5 py-3.5 text-sm rounded border border-black border-solid min-h-[64px] text-zinc-400 max-md:max-w-full">
              <div className="flex gap-3 justify-center items-center self-stretch my-auto">
                <img alt="Replace with an informative alt text" loading="lazy" src="/87a8b61e89d4da06c4794769716dd173d96812cd0e2e1a32706250c891ba6cd0.svg" width={30} height={30} className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]" />
                <input className="self-stretch my-auto" placeholder="Search by Name" />
              </div>
              <div className="flex gap-3 justify-center items-center self-stretch px-2 my-auto border-l border-black">
                <img alt="Replace with an informative alt text" sizes="100w, 200w, 400w, 800w, 1200w, 1600w, 2000w" loading="lazy" src="/3ea36f48ee19db4694009d4980bfd48a4e084d8fa963613d0acacfb6330188e2.png" width={1000} height={1000} className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]" />
                <input className="self-stretch my-auto" placeholder="Search by Pincode" />
                <img alt="Replace with an informative alt text" loading="lazy" src="/f34e1faae923cbb3cc6ffac85472990018e1da854cd952d43d9cdbf27bf9cbbc.svg" width={18} height={18} className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
              </div>
              <div className="flex gap-3 justify-center items-center self-stretch px-2 my-auto border-l border-black">
                <img alt="Replace with an informative alt text" sizes="100w, 200w, 400w, 800w, 1200w, 1600w, 2000w" loading="lazy" src="/ae781884ea0ea3371a053457ae18e25b069ab391aaad4274ccb40a31bd00de0e.png" width={1000} height={1000} className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]" />
                <input className="self-stretch my-auto" placeholder="Search by Address" />
                <img alt="Replace with an informative alt text" loading="lazy" src="/f34e1faae923cbb3cc6ffac85472990018e1da854cd952d43d9cdbf27bf9cbbc.svg" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
              </div>
              <button className="gap-2 self-stretch px-2 py-1.5 my-auto text-base text-white whitespace-nowrap bg-red-500 rounded">
                Search
              </button>
            </div>
          </div>);
    }
  