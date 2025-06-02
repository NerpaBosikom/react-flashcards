// src/components/TariffList.jsx
import { useState } from 'react';
import Tariff from './Tariff';
import './TariffList.css';

function TariffList() {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const tariffs = [
      { title: 'Безлимитный 300', price: 300, speed: 10, color: '#a7c957' },
      { title: 'Безлимитный 450', price: 450, speed: 50, color: '#fcca46' },
      { title: 'Безлимитный 550', price: 550, speed: 100, color: '#ff6b6b' },
      { title: 'Безлимитный 1000', price: 1000, speed: 200, color: '#6c5ce7' }
    ];

  const handleSelect = (price) => {
    setSelectedTariff(price === selectedTariff ? null : price);
  };

  return (
    <div className="tariff-container">
      {tariffs.map((tariff) => (
        <Tariff
        key={tariff.price}
        title={tariff.title}
        price={tariff.price}
        speed={tariff.speed}
        color={tariff.color}
        isSelected={tariff.price === selectedTariff}
        onSelect={() => handleSelect(tariff.price)}
      />
      ))}
    </div>
  );
}

export default TariffList;
