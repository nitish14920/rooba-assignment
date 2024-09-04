import React from "react";

const Categories = () => {
  const initCategories = [
    {
      name: "Mobile",
      img: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
    },
    {
      name: "Fashion",
      img: "https://cdn-icons-png.flaticon.com/128/3211/3211391.png",
    },
    {
      name: "Electronics",
      img: "https://cdn-icons-png.flaticon.com/128/2278/2278984.png",
    },
    {
      name: "Grocery",
      img: "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100",
    },
  ];

  // const [categories, setCategories] = useState(initCategories);

  return (
    <div className="flex justify-around  bg-green-400 m-auto py-2 my-4">
      {initCategories.map((item) => {
        return (
          <div className="flex-row cursor-pointer">
            <img className="w-14 m-auto" src={item.img} alt="" />
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
