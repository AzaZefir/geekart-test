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
