let cache = new Map();

export function get<T>(url: string) {
  if (!cache.has(url)) {
    cache.set(url, fetchData<T>(url));
  }
  return cache.get(url);
}

export async function fetchData<T>(url: string): Promise<T> {
  await wait();

  const response = await fetch(`api/${url}.json`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return (await response.json()) as Promise<T>;
}

function wait(delay: number = 2000) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
