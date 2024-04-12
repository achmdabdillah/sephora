import logo from "./sephorahero.jpeg";
import "./App.css";
import { useGeolocated } from "./geolocation";

function App() {
  const {
    coords,
    getPosition,
    isGeolocationAvailable,
    isGeolocationEnabled,
    positionError,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
    watchLocationPermissionChange: true,
  });

  const handleEvent = async (e) => {
    getPosition();

    let { longitude, latitude } = coords;

    console.log(`${latitude}, ${longitude}`);

    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3030/home/location`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ longitude, latitude }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {}
  };
  return (
    <div style={{ position: "relative" }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div
        style={{
          background: "white",
          width: 500,
          height: 160,
          textAlign: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <p style={{ marginTop: 40 }}>Request timed out</p>
        <button
          style={{
            background: "black",
            marginBottom: 20,
            color: "white",
            padding: 10,
            border: "none",
            borderRadius: 25,
            cursor: "pointer",
          }}
          onClick={handleEvent}
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export default App;
