import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map(video =>
    <VideoListItem
      onVideoClick={onVideoSelect}
      key={video.etag}
      video={video}
    />
  )

  return (
    // <table className='w3-table w3-bordered w3-card-4'>
    //   <tbody>
    //     {videoItems}
    //   </tbody>
    // </table>
    <ul className='w3-ul w3-card-4'>
      {videoItems}
    </ul>
  )
}

export default VideoList
