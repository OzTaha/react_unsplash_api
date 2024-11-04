// **************** Props ****************
// NOT-1: Bir component, kendisine gelen prop'ları sadece okuyabilir, değiştiremez. Prop'lar "immutable"dır (değiştirilemez).
// NOT-2: Bir üst componentden alt componente veri aktarmak için kullanılır.
// NOT-3: componentlerin tekrar kullanılabilir ve dinamik olmasını sağlar.

import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/ImageList";

// Genel mantık
// App componenti, SearchHeader componentini oluşturur ve ona bir fonksiyon (handleSubmit) iletir.

// kullanıcıdan gelen girdiyi işlemek için handleSubmit adında bir fonksiyon barındırır.
function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term); // searchImages fonksiyonu çağırılarak, API'ye istek gönderiliyor.
    setImages(result);
  };

  return (
    <div className="App">
      {/*
      -SearchHeader componentine handleSubmit fonksiyonu search prop'u olarak aktarılır. Bu, SearchHeader componentinin App componentine veri göndermesini sağlar.
      */}
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceHolder={images} />
    </div>
  );
}

export default App;
