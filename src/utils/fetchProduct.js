export default async function fetchProduct(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
