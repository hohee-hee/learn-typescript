// ---------------------------------------------------- PICK & Omit ----------------------------------------------------
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// Pick을 통해 기존 타입을 원하는대로 사용할 수 있다.
// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, "id" | "name" | "price">;
function displayProductDetail(shoppingtItem: ShoppingItem): {};

// 3. 특정 상품 정보를 업데이트(깽신)하는 함수
// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

type UpdateProduct = Partial<Product>; // 위와 동일한 결과 도출
function updateProductItem(ProductItem: Partial<Product>) {}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserUpadateProfile {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1
// type UserProfileUpdate = {
//   username: UserProfile["username"];
//   email: UserProfile["email"];
//   profilePhotoUrl: UserProfile["profilePhotoUrl"];
// };

// #2
type UserProfileUpdate = {
  [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
};
type UserProfileKeys = keyof UserProfile;

// #3
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// #4
type Subset<T></T> = {
  [p in keyof T]:? T[p];
}
