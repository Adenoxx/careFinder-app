import React from "react";
import "../styles/HospitalSearch.css";

const HospitalSearch = () => {
  return (
    <div className="hospital-search">
      <h2 className="hero-txt">Explore Hospitals Near You</h2>
      <div className="search-div">
        <div>
          <input type="search" className="search_1" />
        </div>
        <div className="butt-container">
          <button className="search_butt">Search</button>
        </div>
      </div>
      <div className="hospital-card">
        <h3>First City Hospital</h3>
        <img src="svg/dark-loc-icon.svg" alt="location-icon" className="loc" />
        <p>17, Bamidele Street, Osapa London, Lekki, Ibeju-Lekki</p>
        <img src="svg/dark-call-icon.svg" alt="call-icon" className="" />
        <p>08173480926</p>
      </div>
    </div>
  );
};

export default HospitalSearch;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/Providers.css";

// const providersApiUrl = "https://api.reliancehmo.com/v3/providers";

// const HospitalSearch = () => {
//   const [providers, setProviders] = useState([]);
//   // const [currentPage, setCurrentPage] = useState<number>(1);
//   // const [postsPerPage] = useState<number>(12);

//   const [loading, setLoading] = useState(false);
//   const [searchInput] = useState<string>("");
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [, setFilteredProviders] = useState<any[]>([]);

//   useEffect(() => {
//     setLoading(true);

//     const fetchApi = async () => {
//       try {
//         const res = await axios.get(providersApiUrl);
//         // console.log("From Res: ", res);
//         setProviders(res.data);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//       }
//     };

//     fetchApi();
//   }, []);

//   console.log({ providers, loading, providersApiUrl });
//   console.log("From here", providers?.data);

//   useEffect(() => {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const filtered = providers.filter((provider: any) => {
//       const { name, state } = provider;
//       const searchValue = searchInput.toLowerCase();
//       return (
//         name.toLowerCase().includes(searchValue) ||
//         state.name.toLowerCase().includes(searchValue)
//       );
//     });
//     setFilteredProviders(filtered);
//   }, [searchInput, providers]);

//   return (
//     <>
//       {/* Search */}
//       <h1>Explore Hospitals</h1>
//       <br></br>
//       {providers &&
//         providers?.data?.map(({ name, address,state, type }, idx) => (
//           <div className="default-display">
//           <div key={idx} className="hospital_card">
//             <p>Name:{name} </p>
//             <p>Address: {address}</p>
//             <p>State: {state?.name}</p>
//             <p>Prov. type: {type?.name}</p>
//             </div>
//           </div>
//         ))}

//       {/*Default Display of Providers(Location: Lagos)  */}
//     </>
//   );
// };

// export default HospitalSearch;
