import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedKeyword = values.keyword.trim(); // ✅ Trim whitespace

    if (!trimmedKeyword) {
      console.warn("🔍 Search keyword is empty after trimming. Skipping API call.");
      return;
    }

    try {
      const { data } = await axios.get(`/api/v1/product/search/${trimmedKeyword}`);
      setValues({ ...values, keyword: trimmedKeyword, results: data }); // ✅ Ensure state also updates with trimmed keyword
      navigate("/search");
    } catch (error) {
      console.error("🔴 Search API Error:", error);
    }
  };

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;