import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';

function Table({
  heading,
  tableData,
  thTitle,
  thDetails,
  thInfo,
  btnTitle,
  btnName,
  album,
  route,
  tweet,
  artists,
  page,
  handleModal,
}) {
  const navigate = useNavigate();
  return (
    <section className="antialiased py-10 w-full  px-4">
      <div className="flex flex-col justify-center w-full">
        <div
          className={
            !album
              ? 'w-full max-w-4xl mx-auto pl-8 bg-white shadow-lg rounded-sm border border-gray-200'
              : ' max-w-2xl   mx-auto bg-white shadow-lg rounded-sm border border-gray-200'
          }
        >
          <header className="flex justify-between px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">{heading}</h2>
            {!artists && (
              <Link to="/">
                <h2 className="font-semibold text-gray-800">Go back</h2>
              </Link>
            )}
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div
                        className={
                          !album
                            ? 'font-semibold text-left'
                            : 'font-semibold relative left-10'
                        }
                      >
                        {thTitle}
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">{thDetails}</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">{thInfo}</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div
                        className={
                          !album
                            ? 'font-semibold text-left'
                            : 'font-semibold  text-left'
                        }
                      >
                        Action
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {tableData.map((data, index) => (
                    <tr key={index}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div
                            className={
                              !tweet
                                ? 'font-medium text-gray-800'
                                : 'text-left text-ellipsis overflow-hidden w-[200px]'
                            }
                          >
                            {data.name}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap ml-2xl">
                        <div className="text-left">
                          {!album ? data.email : data.title}
                        </div>
                      </td>
                      <td className="p-2  whitespace-nowrap">
                        <div
                          className={
                            !tweet
                              ? 'text-left '
                              : 'text-left text-ellipsis overflow-hidden w-[250px] text-green-500'
                          }
                        >
                          {!tweet ? data.phone : data.body}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap ml-[30px]">
                        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                          <span className="mr-8">
                            <Button
                              onClick={() =>
                                navigate(`${route}/${data.id}`, {
                                  state: { name: `${data.name}` },
                                })
                              }
                              styled
                            >
                              {btnTitle}
                            </Button>
                          </span>
                          {!album && (
                            <Button
                              onClick={
                                tweet
                                  ? handleModal
                                  : () => navigate(`${page}/${data.id}`)
                              }
                            >
                              {btnName}
                            </Button>
                          )}
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
