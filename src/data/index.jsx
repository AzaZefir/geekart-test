import {
  AchievmentsIcon,
  AllIcon,
  ResultIcon,
  VideoIcon,
} from "./../assets/filterIcons/FilterIcons";
import {
  Building,
  Home,
  ShoppingBag,
  Trophy,
  Users,
} from "../assets/headerIcons/HeaderIcons";

// header nav links
export const pages = [
  { id: "1", link: "Лента", icon: <Home /> },
  { id: "2", link: "Маркетплейс", icon: <ShoppingBag /> },
  { id: "3", link: "Рейтинги", icon: <Users /> },
  { id: "4", link: "Cоревнования", icon: <Trophy /> },
  { id: "5", link: "Организации", icon: <Building /> },
];
// artice images
export const articleImages = [
  {
    img: "/image1.png",
    title: "Breakfast",
  },
  {
    img: "/image2.png",
    title: "Burger",
  },
  {
    img: "/image3.png",
    title: "Camera",
  },
  {
    img: "/image4.png",
    title: "Coffee",
  },
  {
    img: "/image5.png",
    title: "Hats",
  },
  {
    img: "/image6.png",
    title: "Honey",
  },
];
// filter data sources
export const filterData = [
  { id: 1, value: "Все", icon: <AllIcon /> },
  { id: 2, value: "Результаты соревнований", icon: <ResultIcon /> },
  { id: 3, value: "Видео", icon: <VideoIcon /> },
  { id: 4, value: "Достижения", icon: <AchievmentsIcon /> },
];

// new feed data sources
export const newsFeedsData = [
  {
    id: 1,
    bg: "/news1.png",
    header:
      "Противостояние В Мире Спортивной Борьбы: Атлеты Превращают Тренировочные Арены в Арены Героев",
    title: "Спортивная Борьба",
    date: "12 марта, 2024 в 16:03",
    hashTag: [
      {
        id: 1,
        text: "#Борьба",
      },
      {
        id: 2,
        text: "#Соревнования",
      },
      {
        id: 3,
        text: "#Соревнования",
      },
    ],
  },
  {
    id: 2,
    bg: "/news1.png",
    header:
      "Противостояние В Мире Спортивной Борьбы: Атлеты Превращают Тренировочные Арены в Арены Героев",
    title: "Спортивная Борьба",
    date: "12 марта, 2024 в 16:03",
    hashTag: [
      {
        id: 1,
        text: "#Борьба",
      },
      {
        id: 2,
        text: "#Соревнования",
      },
      {
        id: 3,
        text: "#Соревнования",
      },
    ],
  },
  {
    id: 3,
    bg: "/news1.png",
    header:
      "Противостояние В Мире Спортивной Борьбы: Атлеты Превращают Тренировочные Арены в Арены Героев",
    title: "Спортивная Борьба",
    date: "12 марта, 2024 в 16:03",
    hashTag: [
      {
        id: 1,
        text: "#Борьба",
      },
      {
        id: 2,
        text: "#Соревнования",
      },
      {
        id: 3,
        text: "#Соревнования",
      },
    ],
  },
];

// stepper data
export const steps = [
  "Выберите вид спорта",
  "Выберите спортсмена",
  "Выберите спортивные организации",
  "Заполните основные данные",
];

export const kindOfSportsData = [
  { id: 1, title: "Велоспорт", img: "/sport1.png" },
  { id: 2, title: "Гандбол", img: "/sport2.png" },
  { id: 3, title: "Конькобежный спорт", img: "/sport3.png" },
  { id: 4, title: "Самбо", img: "/sport4.png" },
  { id: 5, title: "Спортивная борьба", img: "/sport5.png" },
  { id: 6, title: "Тяжелая атлетика", img: "/sport6.png" },
];

// sportsmans data
export const sportsmansData = [
  {
    id: 1,
    name: "Александр Антонов",
    title: "Греко-римская борьба",
    img: "/sportsman1.png",
  },
  {
    id: 2,
    name: "Андрей Козлов",
    title: "Греко-римская борьба",
    img: "/sportsman2.png",
  },
  {
    id: 3,
    name: "Дмитрий Пономарев",
    title: "Греко-римская борьба",
    img: "/sportsman2.png",
  },
  {
    id: 4,
    name: "Алексей Бессонов ",
    title: "Греко-римская борьба",
    img: "/sportsman1.png",
  },
  {
    id: 5,
    name: "Константин Ковалевский",
    title: "Греко-римская борьба",
    img: "/sportsman1.png",
  },
  {
    id: 6,
    name: "Дмитрий Пономарев",
    title: "Греко-римская борьба",
    img: "/sportsman6.png",
  },
  {
    id: 7,
    name: "Андрей Козлов",
    title: "Греко-римская борьба",
    img: "/sportsman7.png",
  },
  {
    id: 8,
    name: "Дмитрий Замятин",
    title: "Греко-римская борьба",
    img: "/sportsman8.png",
  },
  {
    id: 9,
    name: "Константин Ковалевский",
    title: "Греко-римская борьба",
    img: "/sportsman1.png",
  },
  {
    id: 10,
    name: "Дмитрий Пономарев",
    title: "Греко-римская борьба",
    img: "/sportsman1.png",
  },
  {
    id: 11,
    name: "Александр Антонов",
    title: "Греко-римская борьба",
    img: "/sportsman7.png",
  },
  {
    id: 12,
    name: "Андрей Козлов",
    title: "Греко-римская борьба",
    img: "/sportsman7.png",
  },
];

// sportsmans data
export const organizationsData = [
  {
    id: 1,
    name: "Всероссийское физкультурно-спортивное общество «Динамо» (ВФСО «Динамо»)",
    img: "/org1.png",
  },
  {
    id: 2,
    name: "Ассоциация зимних олимпийских видов спорта (АЗОВС)",
    img: "/org2.png",
  },
  {
    id: 3,
    name: 'АНО "Столичный центр развития гандбола", МГК "ЦСКА" Москва',
    img: "/org3.png",
  },
  {
    id: 4,
    name: 'Пермская краевая общественная организация "Гандбольный клуб Пермские медведи"',
    img: "/org4.png",
  },
  {
    id: 5,
    name: "Общественная организация Ставропольский городской гандбольный клуб «Виктор»",
    img: "/org5.png",
  },
  {
    id: 6,
    name: 'Автономная некоммерческая организация "Гандбольный клуб "Зенит"',
    img: "/org6.png",
  },
  {
    id: 7,
    name: 'Автономная некоммерческая организация "Гандбольный клуб СКИФ"',
    img: "/org7.png",
  },
  {
    id: 8,
    name: 'Гандбольный союз "Ростов-Дон"',
    img: "/org8.png",
  },
  {
    id: 9,
    name: 'Автономная некоммерческая организация "Гандбольный клуб СКИФ"',
    img: "/org1.png",
  },
  {
    id: 10,
    name: 'Автономная некоммерческая организация "Гандбольный клуб СКИФ"',
    img: "/org1.png",
  },
  {
    id: 11,
    name: 'Автономная некоммерческая организация "Гандбольный клуб СКИФ"',
    img: "/org7.png",
  },
  {
    id: 12,
    name: 'Автономная некоммерческая организация "Гандбольный клуб СКИФ"',
    img: "/org7.png",
  },
];
