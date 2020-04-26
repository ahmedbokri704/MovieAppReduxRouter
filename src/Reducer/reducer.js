const initialState = {
  movies: [
    {
      img: "https://cdn-static.egybest.net/serve/movies/art-2834709917-x300.jpg",
      name: "Ip Man 4: The Finale",
      year: "2019",
      star: 3,
      description: "The Kung Fu teacher travels to the United States, where his student disturbs the local martial arts community by opening Wing Chung School .",
      id:1

  },
  {
    img: "https://cdn-static.egybest.net/serve/movies/art-2794910638-x300.jpg",
    name: "StarDog and TurboCat",
    year: "2019",
    star: 4,
    description: "A dog wakes up to find himself possessing superpowers, and as he searches for his help, he meets a super cat to fight crime at night.",
    id:2
  },
  {
    img: "https://cdn-static.egybest.net/serve/movies/art-2866831890-x300.jpg",
    name: "Fantasy Island",
    year: "2014",
    star: 2,
    description: "Mr. Rourke succeeds in fulfilling the secret dreams of his lucky guests who are guests in a secluded tropical resort, but these dreams quickly turn into nightmares, and the guests must save their lives.",
    id:3

  },
  
],
  keyword: "",
  rate: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((element) => element.id !== action.payload),
      };

    case "NAME_FILTER":
      return {
        ...state,
        keyword: action.payload,
      };

    case "RATING_FILTER":
      return {
        ...state,
        rate: action.payload,
      };

    case "EDIT_MOVIE":
      return {
        ...state,
        movies: state.movies.map((element) =>
          element.id === action.payload
            ? { ...element, isEditable: !element.isEditable }
            : element
        ),
      };

    case "SAVE_MOVIE":
      return {
        ...state,
        movies: state.movies.map((element) =>
          element.id === action.payload.id
            ? {
                ...element,
                name: action.payload.name,
                img: action.payload.img,
                year: action.payload.year,
                star: action.payload.star,
                rate: action.payload.rate,
                description: action.payload.description,
              }
            : element
        ),
      };

    default:
      return state;
  }
}
