const url = "fid-recruiting/fid-task-4-ffront-products.json";

export default async function fetchProduct() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
