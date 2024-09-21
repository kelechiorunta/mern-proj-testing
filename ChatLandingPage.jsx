import * as React from "react";
import OptimizedSuggestedTailor from "./OptimizedSuggestedTailor";

export default function ChatLandingPage() {
  return (
    <>
    <div className="flex flex-col">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/de4a4efdc000692b339c63aedb688c24c68da43ce3d0c57215e3e7a8ee5a6017?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/de4a4efdc000692b339c63aedb688c24c68da43ce3d0c57215e3e7a8ee5a6017?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de4a4efdc000692b339c63aedb688c24c68da43ce3d0c57215e3e7a8ee5a6017?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/de4a4efdc000692b339c63aedb688c24c68da43ce3d0c57215e3e7a8ee5a6017?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/de4a4efdc000692b339c63aedb688c24c68da43ce3d0c57215e3e7a8ee5a6017?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de4a4efdc000692b339c63aedb688c24c68da43ce3d0c57215e3e7a8ee5a6017?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/de4a4efdc000692b339c63aedb688c24c68da43ce3d0c57215e3e7a8ee5a6017?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/de4a4efdc000692b339c63aedb688c24c68da43ce3d0c57215e3e7a8ee5a6017?placeholderIfAbsent=true&apiKey=661e1fa212c74d1c94d19e320025bbf6"
        className="object-contain w-full aspect-[2] max-md:max-w-full"
      />
    </div>
    <OptimizedSuggestedTailor/>
    </>
  );
}