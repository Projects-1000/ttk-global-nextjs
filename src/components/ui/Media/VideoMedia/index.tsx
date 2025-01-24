import { DetailedHTMLProps, VideoHTMLAttributes } from 'react';

export interface VideoMediaProps extends DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {}
export const VideoMedia = ({ title, src, width, height, autoPlay = false, loop = false }: VideoMediaProps) => {
  return (
    <video
      title={title || 'Video'}
      width={width}
      height={height}
      controls
      autoPlay={autoPlay}
      loop={loop}
      preload="none"
    >
      <source src={src} type="video/mp4" />
      <source src={src} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};
