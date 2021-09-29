import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { getPosts } from 'services/getPosts';
import Footer from 'components/Footer';
import Header from 'components/Header';
import MetaHead from 'components/MetaHead';
import Post from 'components/Post';
import Aside from 'components/Aside';
import Pagination from 'components/Pagination';

type PostData = {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

const Home: NextPage = () => {
  const [titleTag, setTitleTag] = useState("Strona główna");
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    setPosts(getPosts(currentPage))
  }, [currentPage])

  return (
    <div className="container">
      <MetaHead title="Strona" description="description" />
      <Header />
      <main className="main">
        <section className="main__top">
          <div className="main__top-tags">
            <span
              className={`${titleTag === "Strona główna" && "active"}`}
              onClick={() => setTitleTag("Strona główna")}
            >
              Strona główna
            </span>
            <span>/</span>
            <span
              className={`${titleTag === "Tag" && "active"}`}
              onClick={() => setTitleTag("Tag")}
            >
              Tag
            </span>
          </div>
          <div className="main__top-title">
            <div className="main__top-title-triangle"></div>
            <h1>{titleTag}</h1>
          </div>
        </section>
        <section className="main__wrapper">
          <div className="main__col">
            <article className="main__text">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit id obcaecati harum quaerat sequi laboriosam reiciendis nostrum. Ipsum fuga ducimus vel vitae expedita ex numquam neque, animi culpa est magnam distinctio earum ea sit fugiat esse hic labore tenetur facere voluptates nisi amet?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eum, maiores nemo beatae officia repellendus. Iusto, expedita aut reprehenderit illo adipisci ipsa sunt sequi esse repellendus molestias ipsam inventore incidunt cumque quia nesciunt vel veritatis atque nostrum, sed excepturi ullam in odit. Recusandae eveniet fuga in illo ratione, debitis quo, perferendis assumenda quod libero ipsa corporis. Corrupti adipisci minus nulla inventore aliquid ratione eius, mollitia impedit hic molestiae repellendus rerum facere quasi.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit id obcaecati harum quaerat sequi laboriosam reiciendis nostrum. Ipsum fuga ducimus vel vitae expedita ex numquam neque, animi culpa est magnam distinctio earum ea sit fugiat esse hic labore tenetur facere voluptates nisi amet?</p>
            </article>
            {posts.slice(0,4).map((article, index) => (
              <Post key={article.id} index={index} id={article.id} title={article.title} description={article.description} date={article.date} image={article.image} />
            ))}
          </div>
          <div className="main__aside">
            <Aside />
          </div>
        </section>
        <section className="main__col">
          {posts.slice(4,8).map((article, index) => (
              <Post key={article.id} index={index+4} id={article.id} title={article.title} description={article.description} date={article.date} image={article.image} />
            ))}
        </section>
        <section className="main__col">
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
