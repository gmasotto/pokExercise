import { useState } from "react";
import { debounce } from "lodash";

export const usePokeFilter = () => {
  const [filterData, setFilterData] = useState({
    search: "", // used to search fo pokemon name
    filter: "", // used to filter pokemon type
  });

  const setSearchValue = debounce((value) => {
    setFilterData((prevState) => ({ ...prevState, search: value }));
  }, 250);

  const setFilterValue = (value) => {
    setFilterData((prevState) => ({ ...prevState, filter: value }));
  };

  return {
    searchValue: filterData.search,
    filterValue: filterData.filter,
    setFilterValue,
    setSearchValue,
  };
};
