export async function load({ fetch }) {
  const fetchPhones = async () => {
    const request = await fetch(
      "https://dummyjson.com/products/search?q=phone"
    );
    const phones = await request.json();
    return phones;
  };

  const fetchLaptops = async () => {
    const request = await fetch(
      "https://dummyjson.com/products/search?q=laptop"
    );
    const laptops = await request.json();
    return laptops;
  };

  const fetchDecor = async () => {
    const request = await fetch(
      "https://dummyjson.com/products/search?q=decor"
    );
    const decor = await request.json();
    return decor;
  };

  return {
    phones: await fetchPhones(),
    laptops: await fetchLaptops(),
    decor: await fetchDecor(),
  };
}

export const prerender = true;
