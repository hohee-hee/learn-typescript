interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// Pick을 통해 기존 타입을 원하는대로 사용할 수 있다.
type ShoppingItem = Pick<Product, "id" | "name" | "price">;

function displayProductDetail(shoppingtItem: ShoppingItem): {};
