import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = ({ videos }) => {
  const videoItems = videos.map(video =>
    <VideoListItem key={video.etag} video={video} />
  )

  return (
    <table className='w3-table w3-bordered w3-card-4'>
      <tbody>
        {videoItems}
      </tbody>
    </table>
  )
}

export default VideoList
