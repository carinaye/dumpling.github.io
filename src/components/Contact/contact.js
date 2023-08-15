import React, { useState, useEffect } from "react";
import { useNavigate  } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const goBackToHomepage = () => {
    navigate('/');
  };
  const restaurantName = "Yang’s Dumpling";
  const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  const [selectedCity, setSelectedCity] = useState("");
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
 
  useEffect(() => {
    console.log(selectedCity)
    if (selectedCity) {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(restaurantName)}+${encodeURIComponent(selectedCity)}&key=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          const placeId = data.results[0].place_id;
          console.log(data.results)

          const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,formatted_phone_number,opening_hours&key=${API_KEY}`;

          fetch(detailsUrl)
          .then(response => response.json())
          .then(placeDetails => {
            setRestaurantInfo(placeDetails.result);
          })
          .catch(error => console.error("Error fetching place details:", error));
      } else {
        console.log("No results found for the restaurant name.");
      }
    })
    .catch(error => console.error("Error fetching place search results:", error));
}
}, [API_KEY, selectedCity]);

  return (
    <div>
       <label>Select City:</label>
       <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city</option>
        <option value="Hobart">Hobart</option>
        <option value="Melbourne">Melbourne</option>
        <option value="Sydney">Sydney</option>
        <option value="Perth">Perth</option>
      </select>

      {restaurantInfo ? (
        <div>
          <h1>{restaurantInfo.name}</h1>
          <p>Address: {restaurantInfo.formatted_address}</p>
          <p>Contact Number: {restaurantInfo.formatted_phone_number}</p>
          {/* <p>Trading Hours: {restaurantInfo.opening_hours}</p> */}
          {/* <button onClick={goBackToHomepage}>Go Back to Homepage</button> */}
        </div>
      ) : (
        <div>
        <p>Select a city to find a restaurant</p>
        <button onClick={goBackToHomepage}>Go Back to Homepage</button>
        </div>
      )}
    </div>
  );
};

export default Contact;

// import React, { useState, useEffect } from "react";

// const Contact = () => {
//   const restaurantName = "Yang’s Dumpling";
//   const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
//   const [selectedCity, setSelectedCity] = useState("");
//   const [restaurantInfo, setRestaurantInfo] = useState(null);
//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//   };
 
//   useEffect(() => {
//     const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(restaurantName)}&radius=50000&key=${API_KEY}`;

//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         if (data.results.length > 0) {
//           const placeId = data.results[0].place_id;
//           console.log(data.results)

//           const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,formatted_phone_number,opening_hours&key=${API_KEY}`;

//           fetch(detailsUrl)
//             .then(response => response.json())
//             .then(placeDetails => {
//               setRestaurantInfo(placeDetails.result);
//             })
//             .catch(error => console.error("Error fetching place details:", error));
//         } else {
//           console.log("No results found for the restaurant name.");
//         }
//       })
//       .catch(error => console.error("Error fetching place search results:", error));
//   }, []);

//   return (
//     <div>
//       {restaurantInfo ? (
//         <div>
//           <h1>{restaurantInfo.name}</h1>
//           <p>Address: {restaurantInfo.formatted_address}</p>
//         </div>
//       ) : (
//         <p>Loading restaurant information...</p>
//       )}
//     </div>
//   );
// };

// export default Contact;




// const restaurantName = "Yang’s Dumpling";
// const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

// const Contact = () => {
//   console.log(API_KEY)
//   const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(restaurantName)}&key=${API_KEY}`;

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//       if (data.results.length > 0) {
//         const placeId = data.results[0].place_id;

//         const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,formatted_address,formatted_phone_number,opening_hours&key=${API_KEY}`;

//         fetch(detailsUrl)
//           .then(response => response.json())
//           .then(placeDetails => {
//             console.log(placeDetails)
//             console.log("Place ID:", placeId);
//             console.log("Name:", placeDetails.result.name);
//             console.log("Address:", placeDetails.result.formatted_address);
//           })
//           .catch(error => console.error("Error fetching place details:", error));
//       } else {
//         console.log("No results found for the restaurant name.");
//       }
//     })
//     .catch(error => console.error("Error fetching place search results:", error));
// }

// export default Contact