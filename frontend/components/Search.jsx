import React, { useState } from "react";

import {MdClose}from "react-icons/md"
function Search({setShowSearch}) {
  return (
    <div id="search-modal">
      <div id="form-field">
        <input id="search-input" type="text" 
        autoFocus placeholder="Search for Products" />
        <MdClose id="close-btn" onClick={()=>setShowSearch(false)}/>
      </div>
    </div>
  );
}

export default Search;
