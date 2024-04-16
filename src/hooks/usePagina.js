export const usePaginas = () => {
  const getPagina = (url, parametro) => {
    const params = new URLSearchParams(new URL(url).search);
    const valor = params.get(parametro);
    return Number(valor);
  };

  return { getPagina };
};
