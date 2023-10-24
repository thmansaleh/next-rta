function SecondSection({sources}) {
// console.log(sources)
  return (
    <div className=" text-center flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="t3xt-center min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium ">
              <tr className="text-center">
                <th scope="col" className="px-6 py-4">رقم الحدث</th>
                <th scope="col" className="px-6 py-4">نوع الحدث</th>
                <th scope="col" className="px-6 py-4">مصدر البلاغ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="whitespace-nowrap  py-4 font-medium w-100 ">
                  <input type="text" className="w-40 text-center w-20 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
                </td>
                <td className="whitespace-nowrap  py-4 font-medium w-100 ">
                  <input type="text" className="w-40 text-center w-20 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
                </td>
                <td className="whitespace-nowrap  px-6 py-4 font-medium">
                  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5 ">
                 {sources.map(e=>{
                  return  <option value={e.id}>{e.name}</option>

                 })}
                  </select>
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

export default SecondSection
