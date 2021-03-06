import axios from "axios";

export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const categories = await fetchAPI("/categories");
  return categories;
}

export async function getCategory(slug) {
  const categories = await fetchAPI(`/categories?slug=${slug}`);
  return categories?.[0];
}

export async function getProducts() {
  const products = await fetchAPI("/products");
  return products;
}

export async function getLatestPets() {
  const products = await fetchAPI(
    "/products?status=published&_limit=5&_sort=id:DESC"
  );
  return products;
}

export async function getProduct(slug) {
  const products = await fetchAPI(`/products?slug=${slug}`);
  return products?.[0];
}

export async function sendMessage(body) {
  const requestUrl = getStrapiURL("/email");
  try {
    await axios.post(`${requestUrl}`, body);
    return "message send";
  } catch (error) {
    return error;
  }
}
