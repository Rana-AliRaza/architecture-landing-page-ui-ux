import React from 'react'

const YtVideo = () => {
  return (
<div className="flex justify-center">
  <div className="w-full max-w-7xl  py-2 md:py-4 px-4 lg:px-8">
    <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
      <iframe 
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/huE1DmkrH70" 
        title="At Galleria Designs, we give LIFE to your DREAMS" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>

  )
}

export default YtVideo