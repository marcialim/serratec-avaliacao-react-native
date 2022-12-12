import axios from "axios";

const apiProduto = axios.create({
    baseURL: "https://fakestoreapi.com"
});

export default apiProduto; 

export const obterProdutos = async () => {
  try {
    const {data}  = await apiProduto.get("/products");
    return data;
  } catch (e) {
      console.log(e);
  }
};

export const criarProduto = async (title, description, price, image, category) => {
  try {  
    const response = await apiProduto.post("/products", {
        title,
        description, 
        price, 
        image, 
        category
      });

      if (response.status === 200) {
        console.log('Produto cadastrado com sucesso!');
        return true;
      } else {
        console.log('Ocorreu um erro durante o cadastro do produto.');
      }
  }
  catch(error) {
      console.log(error);
      return false;
  } 
};