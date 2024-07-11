/* eslint-disable react/prop-types */

const NewsItem = ({ title, description, imageUrl, newsUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl || "https://via.placeholder.com/400x200"} alt="News" />
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

export default NewsItem;
