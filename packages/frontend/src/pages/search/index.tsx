import { useState, useRef, useEffect } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { SEARCH_QUERY, TOP_PICK_QUERY } from "../../graphql/queries";
import Image from "next/image";
import SearchItem from "@/components/SearchItem";
import Layout from "@/components/Layout";

const SearchPage = () => {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState(-1);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { loading, error, data } = useQuery(TOP_PICK_QUERY);
  const [search, { loading: searchLoading, error: searchError, data: searchData, networkStatus: searchQueryNetworkStatus }] = useLazyQuery(SEARCH_QUERY);

  const handleSearch = async (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      search({
        variables: { searchInput: { name , cuisine} },
      });
    }
  };

  const handleCuisine = async (cuisineId: number) => {
    setCuisine(cuisineId);
    search({
      variables: { searchInput: { name , cuisine: cuisineId === -1 ? undefined : cuisineId} },
    });
  };

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <Layout>
      <div className="min-h-screen py-10 bg-gray-100 text-gray-900 flex flex-col justify-center items-center">
        <label className="mx-4 text-2xl" htmlFor="search">
          Search restaurants 
        </label>
        <form onSubmit={handleSearch} className="mb-2">
          <input
            id="search"
            ref={searchInputRef}
            type="text"
            className="border p-3 m-4 w-80 border-purple-600 text-purple-600 rounded hover:text-gray-800 outline-4 outline-offset-4 outline-purple-200"
            placeholder="Search for a restaurant..."
            value={name}
            onKeyDown={handleSearch}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            className="border p-3 mx-4 w-80 border-purple-600 text-purple-600 rounded hover:text-gray-800 outline-4 outline-offset-4 outline-purple-200"
            name="Select Cuisine"
            value={cuisine}
            onChange={(e) => handleCuisine(parseInt(e.target.value))}
          >
            <option value={-1}>Filter by Cuisine</option>
            <option value={1}>American</option>
            <option value={2}>Chinese</option>
            <option value={3}>Italian</option>
            <option value={4}>Japanese</option>
            <option value={5}>Indian</option>
          </select>


        </form>
        <div>
          <div className="flex justify-center">
            {searchData ? (<h2 className="text-2xl mb-4 items-center">Search Results</h2>) 
              : (<h2 className="text-2xl mb-4 items-center">Top Picks</h2>)}
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>An error occurred.</p>
          ) : (
            searchData?.search?.length === 0 ? (
              <p>No results found.</p>
            ) : (
            searchData ? (searchData.search.map((restaurant: any) => (
              <SearchItem key={restaurant.id} {...restaurant} />
            )))
            : (data.topPick.map((restaurant: any) => (
              <SearchItem key={restaurant.id} {...restaurant} />
            ))))

          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
