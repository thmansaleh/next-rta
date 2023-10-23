
function Times() {
  return (
    <div className=" text-center flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="t3xt-center min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium ">
              <tr className="text-center">
                <th scope="col" className="px-6 py-4">وقت الإستلام</th>
                <th scope="col" className="px-6 py-4">وقت الوصول</th>
                <th scope="col" className="px-6 py-4">وقت الانتهاء</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <input type="text" className="text-center w-20 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <input type="text" className="text-center w-20 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <input type="text" className="text-center w-20 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Times
