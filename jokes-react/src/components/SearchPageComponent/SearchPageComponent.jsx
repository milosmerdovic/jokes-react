import React from "react";
import { useSearch } from "../../store/search/hooks";
import HeaderTitleComponent from "../HeaderTitle/HeaderTitleComponent";
import JokeArea from "../JokeArea";

const SearchPageComponent = () => {
  const { search } = useSearch();

  return (
    <>
      <HeaderTitleComponent title="Pretraga" />
      <div className="main-page-container">
        {search.entities.map((entity) =>
            <JokeArea
              key={entity.id}
              date={entity.input}
              title={"Naslov"}
              jokeText={entity.joke}
            />
        )}
      </div>
    </>
  );
};

export default SearchPageComponent;
