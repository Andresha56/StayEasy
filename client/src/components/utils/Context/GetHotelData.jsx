import React, { useEffect, useState} from 'react'
import { useContext } from 'react';
import { createContext } from 'react';
import { getData } from '../Api';

const GetallHotels = createContext();

export function useHotelDatasContext() {
  return useContext(GetallHotels);
}

function GetHotelData({ children }) {
  //all hotels
  const [hotelsData, setHotelsDatas] = useState([]);
  //selected hotels
  const [selectedHotels,setSelecteadHotels]=useState([]);
  useEffect(() => {
    getData("/get/all/data").then((response) => {
      setHotelsDatas(response);
    })
  },[])
  
  return (
    <GetallHotels.Provider value={{ hotelsData,selectedHotels,setSelecteadHotels }}>
      {children}
    </GetallHotels.Provider>
  )
}

export default GetHotelData