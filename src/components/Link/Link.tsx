export default function Link({ id, url, title, description }) {
  return (
    <div className="flex flex-row font-sans hover:bg-[#F6F5F4] cursor-pointer p-2 rounded-sm">
      <div className="flex flex-col">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-blue-600 hover:underline"
        >
          {title || "Untitled"}
        </a>
        <p className="text-gray-600 text-sm">{description || "No description available"}</p>
      </div>
    </div>
  );
}