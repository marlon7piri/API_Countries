const API = `https://restcountries.com/v3.1/all` ;


export const getPaises = async () => {
  return await fetch(API ).then((response) => response.json());
};



