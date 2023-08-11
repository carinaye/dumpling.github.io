import xiaolongbao from '../../components/Images/xiaolongbao.jpg';
import soupbun from '../../components/Images/prawnbun.jpg';
import wonton from '../../components/Images/wonton.jpg';
import gyoza from '../../components/Images/gyoza.jpeg';
import hargow from '../../components/Images/hargow.jpeg';
import custartbun from '../../components/Images/piggy.jpeg';

export const MEAL = {
  meal:[
    {
      "id": 1001,
      "title": "Xiao Long Bao",
      "introduction": "Steamed Juicy Pork Bun",
      "picture": xiaolongbao,
      "price": "9.9"
    },
    {
      "id": 1002,
      "title": "Soup BUN",
      "introduction": "Pan-fried Prawn Bun",
      "picture": soupbun,
      "price": "12.9",
    },
    {
      "id": 1003,
      "title": "Gyoza",
      "introduction": "Pan-fried Juicy Pork Dumpling",
      "picture": gyoza,
      "price": "11.9",
    },
    {
      "id": 1004,
      "title": "Wonton",
      "introduction": "Pan-fried Vegetable Dumpling",
      "picture":wonton,
      "price": "10.9",
    },
    {
      "id": 1005,
      "title": "Hargow",
      "introduction": "Steamed Prawn Dumpling",
      "picture": hargow,
      "price": "11.9",
    },
    {
      "id": 1006,
      "title": "Custart Bun",
      "introduction": "Steamed Custart Bun",
      "picture": custartbun,
      "price": "5.9",
    },
  ]
}

export default MEAL;
