export function FilterSection() {
  const categories = [
    "Laptops",
    "Gaming",
    "Accessories",
    "Peripherals",
    "Storage",
    "Components",
    "Monitors",
    "Printers",
  ];
  return (
    <>
    <div className="flex mb-4">
      {categories.map((category) => (
        <button
          className="bg-blue-400 hover:bg-blue-500 text-gray-800 font-semibold py-1 px-3 rounded mr-2 mb-2"
          key={category}
        >
          {category}
        </button>
      ))}
      </div>

      <button className="bg-green-800 hover:bg-green-500 text-white font-bold py-1 px-3 rounded mr-2 mb-2">Clear Filter</button>
      </>
  );
}
