import axios from "axios";
// Bu fonksiyon, Unsplash API'ye istekte bulunarak kullanıcının arama terimiyle ilgili görselleri getirir.
/*
  -> axios.get, bir GET isteği yapar ve Unsplash API'den fotoğrafları getirir.
  -> headers kısmında API anahtarı sağlanır.
  -> params kısmında query: term ile arama terimi API'ye gönderilir.
  -> await anahtar kelimesi, API'den cevap gelene kadar bekler.
  -> response.data.results kısmı, API'nin döndüğü arama sonuçlarını temsil eder ve bunlar fonksiyonun döndürdüğü sonuçlar olur.
*/
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID gQ913gCKyXsWP54e9XVPyAw6fpl98PMM4u0aC7L9FSg",
    },
    params: {
      query: term,
    },
  });
  debugger;
  return response.data.results;
};

export default searchImages;
