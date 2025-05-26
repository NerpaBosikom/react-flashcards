import Tariff from './components/Tariff';
import './App.css';

function App() {
  const tariffs = [
    { title: 'Безлимитный 300', price: 300, speed: 10 },
    { title: 'Безлимитный 450', price: 450, speed: 50 },
    { title: 'Безлимитный 550', price: 550, speed: 100 },
    { title: 'Безлимитный 1000', price: 1000, speed: 200 }
  ];

  return (
    <div className="tariff-container">
      {tariffs.map((tariff) => (
        <Tariff
          key={tariff.price}
          title={tariff.title}
          price={tariff.price}
          speed={tariff.speed}
          isHighlighted={tariff.price === 550}
        />
      ))}
    </div>
  );
}

export default App;
