import React from "react";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Max 270 React",
      image: "https://svcy3.myclass.vn/images/nike-air-max-270-react.png",
      price: 100000,
      type: "A",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      image: "https://picsum.photos/200/300",
      price: 120000,
      type: "B",
    },
    {
      id: 3,
      name: "Adidas Ultraboost",
      image: "https://picsum.photos/200/300",
      price: 3330000,
      type: "B",
    },
  ];
  return (
    <div className="container">
      <h1 className="title text-2xl text-blue-500 font-bold">
        Danh sách sản phẩm
      </h1>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="bg-white border-b">
                <th className="px-6 py-4 font-medium text-gray-900 ">
                  {product.id}
                </th>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">
                  <img src={product.image} alt="" width={120} />
                </td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
