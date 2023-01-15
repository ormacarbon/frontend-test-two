export const fetchJson = async <T>(url: string): Promise<T> => {
  let json;
  try {
    const response = await fetch(url);
    json = await response.json();
    if (response.ok === false) throw new Error(json.message);
  } catch (err) {
    json = null;
  } finally {
    return json;
  }
}
