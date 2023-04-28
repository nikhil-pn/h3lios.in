import useFetch from "@/utils/useFetch";
import Link from "next/link";

import React, { useState } from "react";
import { MdClose } from "react-icons/md";

function Search({ setShowSearch }) {
  const [query, setQuery] = useState("");

  const onHandleChange = (e) => {
    let names = e.target.value;
    let name = names.split(" ");
    let result = "";
    for (let i = 0; i < name.length; i++) {
      let letter = name[i];

      if (letter != "") {
        let firstLetter = letter[0].toUpperCase();
        let secondLetter = letter.slice(1, letter.length).toLowerCase();
        let fullName = firstLetter + secondLetter;
        result += fullName + " ";
      }
    }
    setQuery(result);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[name][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <div id="search-modal" className="overflow-auto">
      <div id="form-field" className="">
        <input
          autoComplete="off"
          id="search-input"
          type="text"
          autoFocus
          placeholder="Search for Products"
          onChange={onHandleChange}
        />
        <MdClose
          id="close-btn"
          className="transition-transform rounded-full active:scale-90"
          onClick={() => setShowSearch(false)}
        />
      </div>
      <div id="search-result-content" className="w-full">
        {!data?.data?.length && (
          <div id="start-msg">
            Start typing to see products you are looking for.
          </div>
        )}
        <div id="search-results">
          {data?.data?.map((item) => (
            <Link href={"/product/" + item.attributes.slug}>
              <div
                key={item.id}
                id="search-result-items"
                onClick={() => {
                  setShowSearch(false);
                }}
              >
                <div id="img-container">
                  <img
                    id="img-product"
                    src={item.attributes.image.data[0].attributes.url}
                    alt={item.attributes.name}
                  />
                </div>
                <div id="prod-details">
                  <span id="prod-name">{item.attributes.name}</span>
                  <span id="prod-desc">{item.attributes.subtitle}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
