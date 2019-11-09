import React, { useState } from "react";
import axios from "axios";

export default function SearchForm(props) {
  let { history } = props;
  const [search, setSearch] = useState({
    name: ""
  })
  const handleSubmit = event => {
    event.preventDefault();
    let id;
    axios
      .get("https://rickandmortyapi.com/api/character/")

      .then(res => {
        console.log(res);
        let [saved] = res.data.results.filter((character) => {
          return character.name.includes(search.name);
        });
        if(saved && saved.id) id = saved.id;
        history.push(`/characters/${id}`);
      });
    
  }
  const handleChange = event => {
    setSearch({...search, [event.target.name]: event.target.value})
  }


  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <label>
          Search by name:
          <input type="text" name="name" placeholder="Rick" onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
