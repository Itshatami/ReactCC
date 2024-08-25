import { createElement } from "react";

const UserFavoriteFoods = () => {
  return createElement(
    "div",
    null,

    <span>Favorite Foode</span>,
    <br />,
    <ul>
      <li>ghormeh</li>
      <li>gheymeh</li>
      <li>makaroni</li>
    </ul>
  );
};

export default UserFavoriteFoods;
