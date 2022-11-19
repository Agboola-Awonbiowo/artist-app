import React from 'react';
import Button from '../Button';

function Table({
  heading,
  tableData,
  thTitle,
  thDetails,
  thInfo,
  btnTitle,
  btnName,
}) {
  return (
    <section className="antialiased py-10 bg-gray-100 text-gray-600 w-full  px-4">
      <div className="flex flex-col justify-center w-full">
        <div className="w-full max-w-4xl mx-auto pl-8 bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">{heading}</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">{thTitle}</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">{thDetails}</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">{thInfo}</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Action</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {tableData.map((data) => (
                    <tr key={data.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">
                            {data.name}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{data.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          {data.phone}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap ml-[30px]">
                        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                          <span className="mr-8">
                            <Button styled>{btnTitle}</Button>
                          </span>
                          <Button>{btnName}</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Table;
