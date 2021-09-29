import { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import Link from 'next/link';
import { getPost, getPosts, getSimilarPosts } from 'services/getPosts';
import Header from 'components/Header';
import MetaHead from 'components/MetaHead';
import Aside from 'components/Aside';
import Footer from 'components/Footer';
import Post from 'components/Post';

type PostData = {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

type Props = {
   post: PostData
}

export const getStaticPaths: GetStaticPaths =  () => {
  const posts = getPosts(1);

  return {
    paths: posts.map((post) => ({
      params: { id: String(post.id) }
    })),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
   const post = getPost(Number(params?.id))
   return {
      props: { post }
   }
}

const PostSite: NextPage<Props> = ({ post }) => {
  const [similarPosts, setSimilarPosts] = useState<PostData[]>([]);

  useEffect(() => {
    setSimilarPosts(getSimilarPosts(post?.id))
  }, [post])

  return (
    <div className="container">
      <MetaHead title={post?.title} description={post?.description} />
      <Header />
      <main className="main">
        <section className="main__top">
          <div className="main__top-tags">
            <Link href="/" passHref>
             <button className="postSite__button">
                <svg className="postSite__button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" /></svg>
                <span>Wróć</span>
              </button>
            </Link>
          </div>
        </section>
        <section className="main__wrapper">
          <div className="main__col">
            <img src={post?.image} alt="" className="postSite__image" />
            <p className="postSite__title">{post?.title}</p>
            <p className="postSite__description">{post?.description}</p>
          </div>
          <div className="main__aside">
            <Aside />
          </div>
        </section>
        <div className="main__col">
            <p>Podobne wiadomości</p>
            {similarPosts?.map((post, index) => (
              <Post key={post.id} index={index+1} id={post.id} title={post.title} description={post.description} date={post.date} image={post.image} />
            ))}
          </div>
      </main>

      <Footer />
    </div>
  )
}

export default PostSite;
