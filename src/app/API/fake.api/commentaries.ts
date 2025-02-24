export interface CommentariesTypes {
  id: string;
  movieId: string;
  nickname: string;
  commText: string;
  date: Date;
}

const commentaries: CommentariesTypes[] = [
  {
    id: "3124343",
    movieId: "123wqdqwfw4g23ghve32hb4j",
    nickname: "Valera",
    commText: "Отличный фильм!",
    date: new Date(2023, 0, 1, 11, 23),
  },
  {
    id: "12312321",
    movieId: "123wqdqwfw4g23ghve32hb4j",
    nickname: "Oleg",
    commText: "Мне зашло:)",
    date: new Date(2023, 3, 4, 23, 11),
  },
  {
    id: "21а21аа3",
    movieId: "66635gd21ew4g23ghve55hb4j",
    nickname: "Oleg",
    commText: "Супер! Мне понравилось.",
    date: new Date(2012, 5, 12, 12, 10),
  },
  {
    id: "13f43f",
    movieId: "66635gd21ew4g23ghve55hb4j",
    nickname: "Alina",
    commText: "На любителя, если честно.",
    date: new Date(2014, 3, 12, 12, 10),
  },
  {
    id: "12df1g",
    movieId: "123wqdqwfw4g23ghve32hb4j",
    nickname: "Alina",
    commText: "Могло быть и хуже...",
    date: new Date(2012, 5, 12, 3, 10),
  },
];

const getById = (movieId: string): Promise<CommentariesTypes[]> =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        commentaries.filter((commentary) => commentary.movieId === movieId)
      );
    }, 1000);
  });

export default { getById };
