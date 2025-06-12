import { Button } from '@/components/ui/button'
import { Clock, Eye } from 'lucide-react'
import React, { useState, useRef } from 'react'

const Media = () => {
  // Initialize with demo video
  const [videos, setVideos] = useState([
    {
      id: Date.now(),
      file: null,
      title: 'Demo Video',
      uploadTime: new Date(),
      duration: 10, // Duration of the demo video in seconds
      views: '12.5k views',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: Date.now(),
      file: null,
      title: 'Demo Video',
      uploadTime: new Date(),
      duration: 10, // Duration of the demo video in seconds
      views: '12.5k views',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: Date.now(),
      file: null,
      title: 'Demo Video',
      uploadTime: new Date(),
      duration: 10, // Duration of the demo video in seconds
      views: '12.5k views',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: Date.now(),
      file: null,
      title: 'Demo Video',
      uploadTime: new Date(),
      duration: 10, // Duration of the demo video in seconds
      views: '12.5k views',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: Date.now(),
      file: null,
      title: 'Demo Video',
      uploadTime: new Date(),
      duration: 10, // Duration of the demo video in seconds
      views: '12.5k views',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: Date.now(),
      file: null,
      title: 'Demo Video',
      uploadTime: new Date(),
      duration: 10, // Duration of the demo video in seconds
      views: '12.5k views',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: Date.now(),
      file: null,
      title: 'Demo Video',
      uploadTime: new Date(),
      duration: 10, // Duration of the demo video in seconds
      views: '12.5k views',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: Date.now(),
      file: null,
      title: 'Demo Video',
      uploadTime: new Date(),
      duration: 10, // Duration of the demo video in seconds
      views: '12.5k views',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: Date.now(),
      file: null,
      title: 'Demo Video',
      uploadTime: new Date(),
      duration: 10, // Duration of the demo video in seconds
      views: '12.5k views',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: Date.now(),
      file: null,
      title: 'Demo Video',
      uploadTime: new Date(),
      duration: 10, // Duration of the demo video in seconds
      views: '12.5k views',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  ])
  const fileInputRef = useRef(null)

  // Function to format duration in MM:SS format
  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60)
    const seconds = Math.floor(duration % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // Function to format upload time
  const formatUploadTime = (date) => {
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return '1 day ago'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
    return `${Math.ceil(diffDays / 30)} months ago`
  }

  // Function to generate random views
  const generateRandomViews = () => {
    const views = Math.floor(Math.random() * 50000) + 100
    if (views > 1000) {
      return `${(views / 1000).toFixed(1)}k views`
    }
    return `${views} views`
  }

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('video/')) {
      const video = document.createElement('video')
      video.preload = 'metadata'
      
      video.onloadedmetadata = () => {
        window.URL.revokeObjectURL(video.src)
        
        const newVideo = {
          id: Date.now(),
          file: file,
          title: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
          uploadTime: new Date(),
          duration: video.duration,
          views: generateRandomViews(),
          url: URL.createObjectURL(file)
        }
        
        setVideos(prev => [newVideo, ...prev])
      }
      
      video.src = URL.createObjectURL(file)
    }
    
    // Reset input
    event.target.value = ''
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="flex-1 px-4 md:px-6 pb-6">
      <div className="p-4 md:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Videos Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
              {videos.map((video) => (
                <div key={video.id} className="border rounded-md cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative bg-transparent h-40">
                    <video 
                      className="w-full h-full object-cover"
                      src={video.url}
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                      
                    />
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-button-bg text-white px-2 py-1 text-xs md:text-sm rounded-full flex items-center gap-1">
                        <Clock height={12} width={12} />
                        {formatDuration(video.duration)}
                      </span>
                    </div>

                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-base md:text-xl text-black truncate" title={video.title}>
                      {video.title}
                    </h3>
                    <div className="flex justify-between  gap-2 sm:gap-4 mt-2 text-xs md:text-sm text-secondary">
                      <div className='flex items-center gap-1'> <Eye size={14} /> {video.views}</div>
                      <div>{formatUploadTime(video.uploadTime)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-72 lg:flex-shrink-0  border rounded-md p-4 md:p-6 justify-center  h-fit md:h-[560px]">
            <div className="mt-0 md:mt-24 items-center ">
              <h2 className="text-lg md:text-2xl  font-bold text-primary">Media Gallery</h2>
              <p className="text-tertiary mt-2 text-sm md:text-lg">Upload photos and videos of your bowling performances</p>

              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              <Button 
                onClick={handleUploadClick}
                className="w-full mt-4 md:mt-6 bg-button-bg hover:bg-button-bg/90"
              >
                Upload Media
              </Button>

              <div className="mt-6 md:mt-8 text-center">
                <p className="text-tertiary mt-2 text-sm md:text-lg">Premium feature: Upgrade to upload photos and videos</p>
                <Button  className="w-full mt-4 md:mt-6 bg-button-bg hover:bg-button-bg/90">
                  Upgrade to Premium
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media