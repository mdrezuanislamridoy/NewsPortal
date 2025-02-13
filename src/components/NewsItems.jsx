/* eslint-disable react/prop-types */

const NewsItems = ({ title, description, imageUrl, newsUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img className="w-full h-48 object-cover" src={imageUrl} alt="News" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white px-3 py-1 rounded">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
