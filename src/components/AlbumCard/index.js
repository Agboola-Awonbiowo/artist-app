import React from 'react';

function AlbumCard({ alt,  albumData }) {
  return (
    <div className='flex ml-10 flex-wrap'>
      {albumData.map((data) => (
        <div
          key={data.id}
          className="overflow-hidden w-[300px] bg-white shadow m-5 sm:rounded-lg"
        >
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {data.title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Album Details
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 flex justify-center sm:px-6">
                <img src={data.url} alt={alt} />
              </div>
            </dl>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AlbumCard;
