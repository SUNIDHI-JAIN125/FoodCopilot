import React from 'react';

interface FoodItem {
  name: string;
  quantity: string;
  calorie: number;
}

const FoodItemTable = ({ foodItems }: { foodItems: FoodItem[] }) => (
  <div className="overflow-x-auto">
     <table className="min-w-full  divide-solid divide-gray-600 ">
            <thead className="bg-gray-300  ">
          <tr className="border-blue-400 border-2 bg-blue-200">
            <th scope="col" className="px-3  text-center py-3  text-xl font-bold text-gray-900  uppercase tracking-wider">No.</th>
            <th scope="col" className="px-3   text-center py-3 text-xl font-bold text-gray-900  uppercase tracking-wider">Name</th>
            <th scope="col" className="px-3 py-3 text-center text-xl font-bold text-gray-900  uppercase tracking-wider">Qty</th>
            <th scope="col" className="px-3 py-3 text-center text-xl font-bold text-gray-900  uppercase tracking-wider">Cal</th>
          </tr>
            </thead>
            <tbody className="bg-white  divide-y border-2 border-blue-400 divide-gray-200 ">
          {foodItems.map((item, index) => (
            <tr key={index} className="border-2 border-blue-400">
              <td className="px-3  text-center py-4 whitespace-nowrap bg-blue-100 text-xl  border-2 border-blue-400 font-medium text-black-700 ">{index + 1}</td>
              <td className="px-3 py-4  text-center whitespace-nowrap text-xl  bg-blue-100 border-2 border-blue-400 font-medium text-red-600 ">{item.name}</td>
              <td className="px-3 py-4   text-center whitespace-nowrap text-xl bg-blue-100  border-2 border-blue-400 font-medium text-black-700 ">{item.quantity}</td>
              <td className="px-3 py-4  text-center whitespace-nowrap text-xl  bg-blue-100 border-2 border-blue-400 font-medium text-blue-700 ">{item.calorie}</td>
            </tr>
          ))}
            </tbody>
          </table>
  </div>
);

export default FoodItemTable;
