// "use client";
// import { allCountries } from "@/libs/country_list";
// import { createContext, useEffect } from "react";

// export const CountryContext = createContext();

// export const CountryProvider = ({ children }) => {
//   const getCountry = async () => {
//     const req = await fetch("ipinfo.io/102.89.22.43?token=7b9b9b4708bac4");
//     const res = await req.json();
//     localStorage.setItem(
//       "dev_by_touch_reiki_website_user_country",
//       JSON.stringify(res)
//     );
//     return {
//       country: allCountries[res?.country],
//       code: res?.country,
//     };
//   };

//   const customerCountryLocalStorageStatus = localStorage.getItem(
//     "dev_by_touch_reiki_website_user_country"
//   );

//   const customerCountrySessionStorageStatus = sessionStorage.getItem(
//     "dev_by_touch_reiki_website_user_country"
//   );

//   const updateCountry = async () => {
//     const req = await fetch("/api/country/new", {
//       method: "POST",
//       body: {
//         country: (await getCountry()).country,
//         code: (await getCountry()).code,
//       },
//     });
//   };

//   useEffect(() => {
//     if (customerCountryLocalStorageStatus) {
//       return;
//     } else {
//       getCountry();
//     }
//   }, []);
//   return <CountryContext.Provider>{children}</CountryContext.Provider>;
// };

"use client";
import { allCountries } from "@/libs/country_list";
import { createContext, useEffect, useState } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countryInfo, setCountryInfo] = useState(null);

  const fetchCountryFromAPI = async () => {
    const req = await fetch("https://ipinfo.io?token=7b9b9b4708bac4");
    const res = await req.json();
    const countryName = allCountries.find(
      (country) => country.code === res?.country
    );
    const countryData = {
      country: countryName.name,
      country_code: res?.country,
    };
    localStorage.setItem(
      "dev_by_touch_reiki_website_user_country",
      JSON.stringify(countryData)
    );
    return countryData;
  };

  const updateCountryVisit = async (countryData) => {
    try {
      await fetch("/api/country/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(countryData),
      });
    } catch (error) {
      console.error("Error updating country visit:", error);
    }
  };

  const getCountry = async () => {
    const storedCountry = localStorage.getItem(
      "dev_by_touch_reiki_website_user_country"
    );
    if (storedCountry) {
      return JSON.parse(storedCountry);
    } else {
      return await fetchCountryFromAPI();
    }
  };

  useEffect(() => {
    const storedCountry = localStorage.getItem(
      "dev_by_touch_reiki_website_user_country"
    );
    if (storedCountry) {
      setCountryInfo(JSON.parse(storedCountry));
    } else {
      fetchCountryFromAPI().then((countryData) => {
        setCountryInfo(countryData);
        updateCountryVisit(countryData);
      });
      return;
    }

    const sessionStorageStatus = sessionStorage.getItem(
      "dev_by_touch_reiki_website_user_country"
    );

    if (!sessionStorageStatus) {
      getCountry().then((countryData) => {
        updateCountryVisit(countryData);
        sessionStorage.setItem(
          "dev_by_touch_reiki_website_user_country",
          "updated"
        );
      });
    }
  }, []);

  return (
    <CountryContext.Provider value={countryInfo}>
      {children}
    </CountryContext.Provider>
  );
};

// CREATE A STATE VARIABLE TO STORE USER LOCATION DETAILS
// FUNCTION TO FETCH USER COUNTRY INFO AND STORE IN LOCAL STORAGE
// FUNCTION TO UPDATE USER COUNTRY INFO TO THE BACKEND
// FUNCTION TO CHECK IF DATA IS STORED IN BOTH LOCAL AND SESSION STORAGES
