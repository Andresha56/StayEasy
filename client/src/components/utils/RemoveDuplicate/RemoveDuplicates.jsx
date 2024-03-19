export const RemoveDuplicates = (response) => {
    const uniqueCities = new Set();
    return response.filter((hotel) =>
      uniqueCities.has(hotel?.location.toLowerCase()) ? false : uniqueCities.add(hotel?.location?.toLowerCase())
    );
  };
  