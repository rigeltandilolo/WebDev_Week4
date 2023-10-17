import './App.css'
import React, { useState } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const accordionData = [
    { title: 'Jurusan', content: 'IMT - FSD' },
    { title: 'Angkatan', content: '2022' },
    { title: 'Jalur Sukses', content: 'Percaya Kepada Sang Pencipta' },
    { title: 'Hobi', content: 'Ngoding (tpi boong), Ngedesain, Menyanyi, Ganggu edgar' },
  ];

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <><div className="app">
      <div className="container">
        <div className="left-section">
          <div className="image-container">
            <img
              src="./Rigel Foto.jpg"
              alt="Your Image"
              style={{ display: isVisible ? 'block' : 'none' }} />
            <button onClick={toggleVisibility}>Toggle Image</button>
          </div>
        </div>
        <div className="right-section">
          <div className="accordion">
            {accordionData.map((item, index) => (
              <div key={index} className="accordion-item">
                <div className="accordion-title" onClick={() => handleAccordionClick(index)}>
                  {item.title}
                </div>
                {activeAccordion === index && (
                  <div className="accordion-content">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div><div className='Organisasi'>
        <h1>Riwayat Organisasi</h1>
        <p className='judulorganisasi'>INFINITY GENERASI KE-2 UC MAKASSAR</p>
      </div></>
  );
};

export default App;
