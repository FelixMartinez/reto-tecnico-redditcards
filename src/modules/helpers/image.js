export const isImageUrlValid = (url) => {
  // Expresión regular para verificar si la URL termina en .png, .jpg, .jpeg
  const regex = /\.(png|jpg|jpeg)$/i;
  return regex.test(url);
};

export default isImageUrlValid;
