import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = ({ videos }) => {
  const videoItems = videos.map(video =>
    <VideoListItem video={video} />
  )

  return (
    <ul className='w3-ul'>
      {videoItems}
    </ul>
  )
}

export default VideoList
