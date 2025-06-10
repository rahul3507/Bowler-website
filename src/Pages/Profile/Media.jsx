import { Button } from '@/components/ui/button'
import React, { useState, useRef } from 'react'

const Media = () => {
  const [videos, setVideos] = useState([])
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {videos.map((video) => (
                <div key={video.id} className="border rounded-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative bg-[#d9d9d9] h-40">
                    <video 
                      className="w-full h-full object-cover"
                      src={video.url}
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                      muted
                    />
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-[#8bc342] text-white px-2 py-1 rounded-full text-xs">
                        {formatDuration(video.duration)}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-[#141b34] truncate" title={video.title}>
                      {video.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-[#9a9ca2]">
                      <span>{video.views}</span>
                      <span>{formatUploadTime(video.uploadTime)}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Default placeholder videos if no uploaded videos */}
              {videos.length === 0 && [...Array(6)].map((_, i) => (
                <div key={i} className="border rounded-md overflow-hidden">
                  <div className="relative bg-[#d9d9d9] h-40">
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-[#8bc342] text-white px-2 py-1 rounded-full text-xs">12:00</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-[#141b34]">Pro Tips: Spare Conversion</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-[#9a9ca2]">
                      <span>18k views</span>
                      <span>3 weeks ago</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-[300px] lg:flex-shrink-0">
            <div className="border rounded-md p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-bold text-[#1e2d5e]">Media Gallery</h2>
              <p className="text-[#596050] mt-2 text-sm md:text-base">Upload photos and videos of your bowling performances</p>

              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              <Button 
                onClick={handleUploadClick}
                className="w-full mt-4 md:mt-6 bg-[#8bc342] hover:bg-[#8bc342]/90"
              >
                Upload Media
              </Button>

              <div className="mt-6 md:mt-8 text-center">
                <p className="text-[#596050] text-sm">Premium feature: Upgrade to upload photos and videos</p>
                <Button variant="outline" className="w-full mt-4 border-[#8bc342] text-[#8bc342] hover:bg-[#8bc342]/10">
                  Upgrade to Premium
                </Button>
              </div>

              {/* Video Statistics */}
              {videos.length > 0 && (
                <div className="mt-6 p-4 bg-gray-50 rounded-md">
                  <h3 className="font-medium text-[#141b34] text-sm">Your Videos</h3>
                  <p className="text-[#596050] text-sm mt-1">{videos.length} video{videos.length > 1 ? 's' : ''} uploaded</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media
