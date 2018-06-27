import React from 'react'

const VideoDetail = ({ video }) => {
  if(!video) {
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className='w3-card'>
      <div className='hs-responsive-embed'>
        <iframe className='video' src={url}></iframe>
      </div>
      <div className='w3-container'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail
