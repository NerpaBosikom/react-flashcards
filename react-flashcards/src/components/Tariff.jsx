// src/components/Tariff.jsx
import './Tariff.css';

function Tariff({ title, price, speed, isSelected, onSelect, color }) {
  const baseBg = `${color}10`;
  const selectedBg = `${color}30`;
  const border = isSelected ? `3px solid ${color}` : `1px solid ${color}40`;
  const shadow = isSelected ? `0 4px 20px ${color}` : `0 2px 8px ${color}33`;

  const style = {
    backgroundColor: isSelected ? selectedBg : baseBg,
    border,
    boxShadow: shadow,
  };

  return (
    <div className="tariff" style={style} onClick={onSelect}>
      <div className="tariff-header" style={{ backgroundColor: color }}>
        <h2>{title}</h2>
      </div>
      <div className="tariff-body">
        <p className="price">{price}₽/мес</p>
        <p className="speed">до <strong>{speed}</strong> Мбит/сек</p>
        <p className="description">📶 Безлимитный интернет</p>
      </div>
    </div>
  );
}

export default Tariff;
