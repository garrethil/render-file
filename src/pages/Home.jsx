export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <h1 className="text-2xl font-bold underline">Up Next</h1>
      </div>
      <div className="flex justify-center">
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2">Column 1</th>
              <th className="border border-gray-200 px-4 py-2">Column 2</th>
              <th className="border border-gray-200 px-4 py-2">Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Item 1A</td>
              <td className="border border-gray-200 px-4 py-2">Item 2A</td>
              <td className="border border-gray-200 px-4 py-2">Item 3A</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Item 1B</td>
              <td className="border border-gray-200 px-4 py-2">Item 2B</td>
              <td className="border border-gray-200 px-4 py-2">Item 3B</td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Item 1C</td>
              <td className="border border-gray-200 px-4 py-2">Item 2C</td>
              <td className="border border-gray-200 px-4 py-2">Item 3C</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
