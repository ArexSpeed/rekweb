import type { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  id: number;
  index: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

const Post: NextPage<Props> = ({ id, index, title, description, date, image }) => {
  return (
    <div className={`post ${index === 0 && 'first'}`}>
      <div className={`post__image ${index === 0 && 'first'}`}>
        <img src={image} alt="" className="post__image-item" />
      </div>
      <div className={`post__content ${index === 0 && 'first'}`}>
        <p className="post__content-date">{date}</p>
        <Link href={`/post/${id}`} passHref>
          <p className="post__content-title">{title}</p>
        </Link>
        <p className="post__content-description">{description.length > 126 ? `${description.slice(0,126)}...` : description}</p>
      </div>
    </div>
  )
};

export default Post;
