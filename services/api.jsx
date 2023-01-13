export async function getDogFact() {
    try {
      const url = 'https://dogapi.dog/api/v2/facts?limit=1';
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
  
  export async function getCatMessage(text) {
    try {
        const urlCat = `https://cataas.com/cat/says/${text}`;
        const urlCat2 = `https://cataas.com/cat`;
        if (text) {
          const response = await fetch(urlCat);
          const data = await response.json();
          return data;
        }
        const data = await fetch(urlCat2);
        // const data = await response.json();
        return data;
    } catch (error) {
      return error;
    }
  }