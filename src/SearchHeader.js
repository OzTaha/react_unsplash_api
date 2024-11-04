// genel mantık
// SearchHeader componenti bir form barındırır ve form gönderildiğinde bu fonksiyonu çağırır. "taha" değeri, App componentine iletilir ve console'ye yazdırılır.

// Bu component bir prop (search) alır. Bu prop, App componentinden gelen handleSubmit fonksiyonudur.
// function SearchHeader({ search }) {
//   // handleFormSubmit, formun gönderilme olayını yönetir. Form gönderildiğinde, search("taha") çağrılarak App componentine "taha" kelimesi iletilir.
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // search fonksiyonu çağırılıyor ve "taha" değeri bu fonksiyona argüman olarak aktarılıyor.
//     search("taha");
//     debugger;
//   };

//   return (
//     <div className="searchDiv">
//       {/*
//         form gönderildiğinde handleFormSubmit tetikleniyor. Bu fonksiyon, search fonksiyonunu tetikleyip "taha" değerini App componentine iletiyor.
//       */}
//       <form onSubmit={handleFormSubmit}>
//         <label>Ne arıyorsunuz?</label>
//         <input />
//       </form>
//     </div>
//   );
// }

import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
    debugger;
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne arıyorsunuz?</label>
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
