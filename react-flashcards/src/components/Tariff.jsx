// src/components/Tariff.jsx
import './Tariff.css';

function Tariff({ title, price, speed, isHighlighted }) {
  return (
    <div className={`tariff ${isHighlighted ? 'highlighted' : ''}`}>
      <h2>{title}</h2>
      <p className="price">{price}₽/мес</p>
      <p>до {speed} Мбит/сек</p>
      <p>Объём включённого трафика не ограничен</p>
    </div>
  );
}

export default Tariff;
