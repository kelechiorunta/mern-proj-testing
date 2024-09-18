import * as React from "react";

export default function ChatInbox() {
  return (
    <div className="container max-w-full flex overflow-scroll flex-col pt-4 mx-auto w-full bg-white min-w-[480px]">
      <div className="container max-w-full flex flex-col pl-6 w-full">
        <div className="container max-w-full flex gap-5 justify-between self-center w-full min-w-[310px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/92a8b311ca767a61900e8086c3f24a13c0a35bd1e45a919d116e3646e8191975?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6"
            className="object-contain shrink-0 self-start aspect-[2.64] w-[29px]"
          />
          <div className="flex gap-1.5 items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a68e6b28fb5e5c0f7169a7a016caf848ed7631bbe0386e7a16546f251a549f88?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6"
              className="object-contain shrink-0 aspect-[1.42] w-[17px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88eca66c04641ddaad7844b21d656343a66dd4e6af3bc9819842a4e3a857619?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6"
              className="object-contain shrink-0 w-4 aspect-[1.45]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ac4328481c808e87354d1d05c8a2af081410db413af808aa9598c55a43f1d3b?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6"
              className="object-contain shrink-0 self-stretch w-6 aspect-[1.85]"
            />
          </div>
        </div>
        <div className="flex gap-10 justify-between items-center mt-6 w-full max-w-[327px]">
          <div className="flex flex-col self-stretch my-auto w-4">
            <div className="flex w-4 bg-blue-600 rounded-sm min-h-[2px]" />
            <div className="flex w-2.5 bg-blue-600 rounded-sm min-h-[2px]" />
            <div className="flex w-4 bg-blue-600 rounded-sm min-h-[2px]" />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5d4ec8d397e9b8cf54968c852d3d6fe85f2705b5bc3fb07553690c48b8a9928?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
          />
        </div>
        <div className="flex gap-4 items-start mt-8 text-base font-semibold text-center whitespace-nowrap text-stone-900">
          <div className="px-6 py-2 text-white bg-blue-600 rounded-2xl">
            All
          </div>
          <div className="px-6 py-2 rounded-2xl">Unread</div>
          <div className="px-6 py-2 rounded-2xl">Read</div>
          <div className="py-2 pl-6 rounded-2xl">Pined</div>
        </div>
      </div>
      <div className="container w-full flex flex-col mt-6">
        <div className="container max-w-full flex gap-4 items-center px-6 py-4">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6"
            className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-square w-[70px]"
          />
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[241px]">
            <div className="flex gap-4 items-center max-w-full text-stone-900 w-[241px]">
              <div className="flex-1 shrink self-stretch my-auto text-lg font-bold leading-8 basis-0">
                “Legend” Restaurant{" "}
              </div>
              <div className="self-stretch my-auto text-xs leading-5">
                3:40 PM
              </div>
            </div>
            <div className="flex gap-4 items-center max-w-full text-xs whitespace-nowrap w-[241px]">
              <div className="flex-1 shrink self-stretch my-auto text-blue-600 basis-3 text-ellipsis">
                Of course, we just added that to your order. Thanks for letting
                us know!
              </div>
              <div className="self-stretch px-1.5 py-1 my-auto font-bold leading-none text-center text-white bg-blue-600 rounded-[50px]">
                2
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center px-6 py-4 text-stone-900">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6"
            className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-square w-[70px]"
          />
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[241px]">
            <div className="flex gap-4 items-center max-w-full w-[241px]">
              <div className="flex-1 shrink self-stretch my-auto text-lg font-bold leading-8 basis-0">
                “Aura” store
              </div>
              <div className="self-stretch my-auto text-xs leading-5">
                3:40 PM
              </div>
            </div>
            <div className="flex-1 shrink gap-4 self-stretch max-w-full text-xs w-[241px]">
              {" "}
              Would you like to pay online or in-person upon delivery?
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center px-6 py-4 text-stone-900">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6"
            className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-square w-[70px]"
          />
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[241px]">
            <div className="flex gap-4 items-center max-w-full w-[241px]">
              <div className="flex-1 shrink self-stretch my-auto text-lg font-bold leading-8 basis-0">
                Furry Friends
              </div>
              <div className="self-stretch my-auto text-xs leading-5">
                3:40 PM
              </div>
            </div>
            <div className="flex-1 shrink gap-4 self-stretch max-w-full text-xs w-[241px]">
              From chew toys to cozy beds, we've got everything your furry
              friends need to feel right at home. Shop with us for the best
              selection of pet supplies!
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center px-6 py-4 text-stone-900">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/43120f1dd8e0a6f2eb16d461fdf77adc4021c5274e78b78bf1685d84b907596e?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6"
            className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-square w-[70px]"
          />
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[241px]">
            <div className="flex gap-4 items-center max-w-full w-[241px]">
              <div className="flex-1 shrink self-stretch my-auto text-lg font-bold leading-8 basis-0">
                Chic Threads
              </div>
              <div className="self-stretch my-auto text-xs leading-5">
                3:40 PM
              </div>
            </div>
            <div className="flex-1 shrink gap-4 self-stretch max-w-full text-xs w-[241px]">
              Looking for the perfect outfit to make a statement? Our clothing
              store has got you covered. Shop the latest trends and show off
              your style.
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center px-6 py-4 text-stone-900">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6"
            className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-square w-[70px]"
          />
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[241px]">
            <div className="flex gap-4 items-center max-w-full w-[241px]">
              <div className="flex-1 shrink self-stretch my-auto text-lg font-bold leading-8 basis-0">
                Iron & Grace
              </div>
              <div className="self-stretch my-auto text-xs leading-5">
                3:40 PM
              </div>
            </div>
            <div className="flex-1 shrink gap-4 self-stretch max-w-full text-xs w-[241px]">
              Join our fitness studio and start your journey to a healthier,
              stronger you. Our expert trainers will guide you every step of the
              way!
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center px-6 py-4 text-stone-900">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd873cf365a7b92d0e049cbb785a44938a0deedb1321431b567b28ea4290b509?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6"
            className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-square w-[70px]"
          />
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[241px]">
            <div className="flex gap-4 items-center max-w-full w-[241px]">
              <div className="flex-1 shrink self-stretch my-auto text-lg font-bold leading-8 basis-0">
                Sparkling Gems
              </div>
              <div className="self-stretch my-auto text-xs leading-5">
                3:40 PM
              </div>
            </div>
            <div className="flex-1 shrink gap-4 self-stretch max-w-full text-xs w-[241px]">
              Add some sparkle to your life with our stunning collection of
              jewelry. From classic pieces to modern designs, we've got
              everything you need to shine.
            </div>
          </div>
        </div>
        <div className="container max-w-full flex gap-4 items-center px-6 py-4 leading-loose text-stone-900">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/94b46a585db7cab170c348ff880f8b157dd1be7607e15736560c5afb678cf70a?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/94b46a585db7cab170c348ff880f8b157dd1be7607e15736560c5afb678cf70a?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94b46a585db7cab170c348ff880f8b157dd1be7607e15736560c5afb678cf70a?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/94b46a585db7cab170c348ff880f8b157dd1be7607e15736560c5afb678cf70a?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/94b46a585db7cab170c348ff880f8b157dd1be7607e15736560c5afb678cf70a?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94b46a585db7cab170c348ff880f8b157dd1be7607e15736560c5afb678cf70a?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/94b46a585db7cab170c348ff880f8b157dd1be7607e15736560c5afb678cf70a?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/94b46a585db7cab170c348ff880f8b157dd1be7607e15736560c5afb678cf70a?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6"
            className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[3.5] w-[70px]"
          />
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[241px]">
            <div className="flex gap-4 items-center max-w-full w-[241px]">
              <div className="flex-1 shrink my-auto text-lg font-bold basis-0">
                “Legend” Restaurant{" "}
              </div>
              <div className="self-stretch my-auto text-xs">3:40 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
