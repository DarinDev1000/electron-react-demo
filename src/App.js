import ReactWeather, { useOpenWeather } from 'react-open-weather';
import './App.css';


function App() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '309479adfcb6fcd4141c4d45202d4120',
    lat: '1.2921',
    lon: '36.8219',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  return (
    <div className="App">
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Nairobi"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    </div>
  );
}

export default App;
