import type { NextPage } from 'next'
import Image from 'next/image';
import { useState } from 'react';
import { Attachment } from '../../models/Airtable';

interface BlurImageProps {
  image: Attachment;
}

const BlurImage: NextPage<any, any> = ({ image }: BlurImageProps) => {

  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      placeholder='blur'
      blurDataURL={image.thumbnails.small.url}
      src={image.url}
      width={image.width}
      height={image.height}
      className={loaded ? 'unblur' : ''}
      onLoadingComplete={() => setLoaded(true)}>
    </Image>
  )
}

export default BlurImage
