export const RemoveDuplicates = (response) => {
    const uniqueCities = new Set();
    return response.filter((hotel) =>
      uniqueCities.has(hotel.city.toLowerCase()) ? false : uniqueCities.add(hotel.city.toLowerCase())
    );
  };
  