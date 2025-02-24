import { genres } from "./genres.api";
import { GenreTypes } from "./genres.api";

export interface MovieTypes {
  id: string;
  name: string;
  originalName: string;
  year: string;
  country: string;
  genre: GenreTypes[];
  views: number;
  rate: number;
  director: string;
  mainPhoto: string;
  favouriteMark: boolean;
  photos: string[];
  video: string;
}

const movies: MovieTypes[] = [
  {
    id: "123wqdqwfw4g23ghve32hb4j",
    name: "Драйв",
    originalName: "Drive",
    year: "2011",
    country: "США",
    genre: [genres.action, genres.drama],
    views: 3245684,
    rate: 9.7,
    director: "Николас Виндинг Рефн",
    mainPhoto: "/images/drive/mainDrive.jpg",
    favouriteMark: false,
    photos: [
      "/images/drive/1222605.jpg",
      "/images/drive/iD7Zdnoj9uBOWNXwF27F4Q.jpg",
      "/images/drive/trailer15269.jpg",
    ],
    video: "/images/drive/drie.mp4",
  },
  {
    id: "966wfgdwfw4g23ghve55hb4j",
    name: "Криминальное чтиво",
    originalName: "Pulp Fiction",
    year: "1994",
    country: "США",
    genre: [genres.comedy, genres.action, genres.criminal],
    views: 1255684,
    rate: 8.3,
    director: "Квентин Тарантино",
    mainPhoto: "/images/pulpFiction/mainPulpFiction.jpg",
    favouriteMark: false,
    photos: [
      "/images/pulpFiction/121474.jpg",
      "/images/pulpFiction/110480_868822.jpg",
      "/images/pulpFiction/shotimg27055_1.jpg",
    ],
    video: "",
  },
  {
    id: "42355gdsaw4g23ghsc55hb4j",
    name: "Кин-дза-дза",
    originalName: "Кин-дза-дза",
    year: "1986",
    country: "СССР",
    genre: [genres.comedy, genres.drama],
    views: 324255684,
    rate: 10,
    director: "Данелия Георгий",
    mainPhoto: "/images/kinDzaDza/mainKinDzaDza.jpg",
    favouriteMark: false,
    photos: [
      "/images/kinDzaDza/1860.jpg",
      "/images/kinDzaDza/h280_51438493.jpg",
      "/images/kinDzaDza/shotimg38260_1.jpg",
    ],
    video: "",
  },
  {
    id: "66635gd21ew4g23ghve55hb4j",
    name: "Беспредел",
    originalName: "Беспредел",
    year: "1989",
    country: "СССР",
    genre: [genres.thriller, genres.criminal],
    views: 55684,
    rate: 8.7,
    director: "Гостев Игорь Аронович",
    mainPhoto: "/images/bespredel/mainBespredel.jpg",
    favouriteMark: false,
    photos: [
      "/images/bespredel/h280_39046413.jpg",
      "/images/bespredel/80211.jpg",
      "/images/bespredel/754.jpg",
    ],
    video: "",
  },
  {
    id: "12e1dwq1w4g23ghve55hb4j",
    name: "Карты, деньги, два ствола",
    originalName: "Lock, Stock and Two Smoking Barrels",
    year: "1999",
    country: "Великобритания",
    genre: [genres.comedy, genres.criminal],
    views: 1254382,
    rate: 8.6,
    director: "Гай Ричи",
    mainPhoto: "/images/LSaTSB/Lock_Stock_and_Two_Smoking_Barrels_Poster.jpg",
    favouriteMark: false,
    photos: [
      "/images/LSaTSB/1555136408125883941.jpg",
      "/images/LSaTSB/15551365251534779.jpg",
      "/images/LSaTSB/120045_949556.jpg",
    ],
    video: "",
  },
  {
    id: "12edwqd314g23ghve55hb4j",
    name: "Горько!",
    originalName: "Горько!",
    year: "2013",
    country: "Росиия",
    genre: [genres.horror],
    views: 11232,
    rate: 3.6,
    director: "Жора Крыжовников",
    mainPhoto: "/images/gorko/mainGorko.jpg",
    favouriteMark: false,
    photos: [
      "/images/gorko/480767.jpg",
      "/images/gorko/480392.jpg",
      "/images/gorko/start.jpg",
    ],
    video: "",
  },
  {
    id: "1123sdasf14g23ghve55hb4j",
    name: "Это Англия",
    originalName: "This is England",
    year: "2006",
    country: "Великобритания",
    genre: [genres.drama, genres.criminal],
    views: 111122232,
    rate: 7.2,
    director: "Шейн Медоуз",
    mainPhoto: "/images/thisIsEngland/mainThisEngland.jpg",
    favouriteMark: false,
    photos: [
      "/images/thisIsEngland/h280_49256105.jpg",
      "/images/thisIsEngland/587986.jpg",
      "/images/thisIsEngland/378498.jpg",
    ],
    video: "",
  },
  {
    id: "1123123sa14g23ghve55hb4j",
    name: "Евангелион",
    originalName: "Neon Genesis Evangelion",
    year: "1995",
    country: "Япония",
    genre: [genres.action, genres.comedy, genres.cartoon],
    views: 64637364,
    rate: 5.7,
    director: "Хидэаки Анно",
    mainPhoto: "/images/Evangelion/mainEvangelion.JPG",
    favouriteMark: false,
    photos: [
      "/images/Evangelion/scale_1200.jpg",
      "/images/Evangelion/546327.jpg",
      "/images/Evangelion/shotimg111642_1.jpg",
    ],
    video: "",
  },
  {
    id: "12123casddsasf14g23ghve55hb4j",
    name: "1+1",
    originalName: "Intouchables",
    year: "2012",
    country: "Франция",
    genre: [genres.drama],
    views: 4364,
    rate: 8.3,
    director: "Оливье Накаш, Эрик Толедано",
    mainPhoto: "/images/onePlusOne/mainOnePlusOne.jpg",
    favouriteMark: false,
    photos: [
      "/images/onePlusOne/scale_1200.jpg",
      "/images/onePlusOne/308294.jpg",
      "/images/onePlusOne/11-010.jpg",
    ],
    video: "",
  },
  {
    id: "213sad2sf14g23ghve55hb4j",
    name: "Джентльмены удачи",
    originalName: "Джентльмены удачи",
    year: "1971",
    country: "СССР",
    genre: [genres.adventure, genres.comedy],
    views: 131212213,
    rate: 10,
    director: "Александр Иванович Серый",
    mainPhoto: "/images/gentelmenOfFortune/GOFmain.jpg",
    favouriteMark: false,
    photos: [
      "/images/gentelmenOfFortune/7165.jpg",
      "/images/gentelmenOfFortune/7148.jpg",
      "/images/gentelmenOfFortune/0b93d453618e0f4baed67377de.jpg",
    ],
    video: "",
  },
  {
    id: "21122asdw4g23ghve55hb4j",
    name: "Мимино",
    originalName: "Мимино",
    year: "1978",
    country: "СССР",
    genre: [genres.comedy, genres.adventure],
    views: 34572213,
    rate: 10,
    director: "Георгий Данелия",
    mainPhoto: "/images/mimino/miminoMain.jpg",
    favouriteMark: false,
    photos: [
      "/images/mimino/mimino-5.jpg",
      "/images/mimino/mimino-03.jpg",
      "/images/mimino/a884faba-a256-4362-be20-acad01a476fd.jpg",
    ],
    video: "",
  },
  {
    id: "211llknjklniow231123b4j", //12
    name: "Побег из Шоушенка",
    originalName: "The Shawshank Redemption",
    year: "1994",
    country: "США",
    genre: [genres.drama, genres.thriller],
    views: 5341313,
    rate: 8.9,
    director: "Фрэнк Дарабонт",
    mainPhoto: "/images/shoushenko/main.jpg",
    favouriteMark: false,
    photos: [
      "/images/shoushenko/112403.jpg",
      "/images/shoushenko/8438.jpg",
      "/images/shoushenko/960.jpg",
    ],
    video: "",
  },
  {
    id: "21122asdwcsadqwdc5hb4j", //13
    name: "Дурак",
    originalName: "Дурак",
    year: "2014",
    country: "Россия",
    genre: [genres.thriller],
    views: 32132213,
    rate: 8.1,
    director: "Юрий Быков",
    mainPhoto: "/images/durak/durakMain.jpg",
    favouriteMark: false,
    photos: [
      "/images/durak/586069.jpg",
      "/images/durak/1_7a912214.jpg",
      "/images/durak/x195.jpg",
    ],
    video: "",
  },
  {
    id: "2213dsadasadqwdc5hb4j", //14
    name: "Форест Гамп",
    originalName: "Forest Gump",
    year: "1994",
    country: "США",
    genre: [genres.drama, genres.comedy],
    views: 53252213,
    rate: 9.1,
    director: "Роберт Земекис",
    mainPhoto: "/images/forestGump/mainFG.jpg",
    favouriteMark: false,
    photos: [
      "/images/forestGump/h280_48477327.jpg",
      "/images/forestGump/69049.jpg",
      "/images/forestGump/x195.jpg",
    ],
    video: "",
  },

  {
    id: "12313dwqsadqwdc5hb4j", //15
    name: "Однажды в Голливуде",
    originalName: "Once Upon a Time in... Hollywood",
    year: "2019",
    country: "США",
    genre: [genres.comedy],
    views: 78312313,
    rate: 9.1,
    director: "Квентин Тарантино",
    mainPhoto: "/images/holiwod/Once_Upon_a_Time_in_Hollywood_cover.jpg",
    favouriteMark: false,
    photos: [
      "/images/holiwod/oncrpdfjvf_1.jpg",
      "/images/holiwod/maxresdefault.jpg",
      "/images/holiwod/79797-pic905-895x505-92940.jpg",
    ],
    video: "",
  },
];

// Получение всех фильмов
const fetchAll = (): Promise<MovieTypes[]> =>
  new Promise((resolve) => {
    setTimeout(function () {
      resolve(movies);
    }, 500);
  });

// Получение фильма по ID
const getById = (movieId: string): Promise<MovieTypes | undefined> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies.find((movie) => movie.id === movieId));
    }, 500);
  });

export default { fetchAll, getById };

//   const getById = (id) =>
//     new Promise((resolve) => {
//       window.setTimeout(function () {
//         resolve(users.find((user) => user._id === id));
//       }, 1000);
//     });
