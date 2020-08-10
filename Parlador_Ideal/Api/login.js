const efetuarLogin = async (email, senha) => {
  let url = '10.0.2.2';

  const cabecalhoHTTP = {
    method: 'POST',
    body: JSON.stringify({
      userEmail: email,
      password: senha,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  };
  const resposta = await fetch(`http://${url}:4000/database/db/user`, cabecalhoHTTP);

  if (resposta.ok) {
    return resposta.headers.get('x-access-token');
  } else {
    throw new Error('Não foi possível logar');
  }

  console.warn(resposta);
};

export default efetuarLogin;
