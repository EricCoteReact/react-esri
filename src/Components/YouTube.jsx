import React from 'react';

export default function YouTube(props) {
  return (
    <iframe
      type='text/html'
      width='480'
      height='270'
      title='video'
      src={'https://www.youtube.com/embed/' + props.id}
      frameBorder='0'
      allowFullScreen
    ></iframe>
  );
}
