const adicionarPost = (post, usuario) => {
  const novoPost = {
    date: Date.now(),
    text: post,
  };

  return novoPost;
};

export default adicionarPost;
