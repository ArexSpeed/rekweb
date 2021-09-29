import articles from 'data/data.json';

export const getPosts = (currentPage: number) => {
  if (currentPage%2 === 0) {
    const selectPosts = articles.filter((article) =>  article.id > 8);
    return selectPosts;
  } else 
  {
    const selectPosts = articles.filter((article) => article.id <= 8);
    return selectPosts;
  }
}

export const getPost = (id: number) => {
  const selectedPost = articles.find((article) =>  article.id === id);
  return selectedPost;
}

export const getSimilarPosts = (id: number) => {
  const selectPosts = articles.filter((article) =>  article.id === id-1 || article.id === id+1 || article.id === id+2);
  return selectPosts;
}

