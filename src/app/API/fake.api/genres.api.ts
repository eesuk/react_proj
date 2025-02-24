export interface GenreTypes {
  id: string;
  name: string;
}

export const genres: { [key: string]: GenreTypes } = {
  comedy: { id: "67rdca3eeb7f6fgeed471818", name: "Комедия" },
  thriller: { id: "67r1312edwqe21ed471818", name: "Триллер" },
  action: { id: "2113edweddcd3213wddwqwdqs", name: "Боевик" },
  horror: { id: "2113edweddcd3213wd12edwqq2e1", name: "Ужасы" },
  drama: { id: "2113edwe123edwwdwqq2e1", name: "Драма" },
  criminal: { id: "123dwe2eqwde112ewdq", name: "Криминал" },
  cartoon: { id: "12edw21wd34353fr5r", name: "Мультфильм" },
  adventure: { id: "12231wde3ed4r3ewdre4", name: "Приключения" },
};

const fetchAll = (): Promise<{ [key: string]: GenreTypes }> =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(genres);
    }, 1000);
  });

export default { fetchAll };
