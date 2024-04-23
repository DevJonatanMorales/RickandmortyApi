export const getPagina = (url: string | null) => {
  try {
    let pagina = 0;
    if (url === null) return 0;
    if (parseInt(url.substring(url.length - 2))) {
      pagina = Number(url.substring(url.length - 2));
    } else {
      pagina = Number(url.split("")[url.length - 1]);
    }

    return pagina;
  } catch (error) {
    return 0;
  }
};