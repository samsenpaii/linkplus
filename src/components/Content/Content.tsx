"use client";
import { useEffect, useState } from "react";
import Link from "../Link/Link";

export default function Content() {
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch("/api/getLinkDetails");
      const data = await response.json();
      if (response.ok && data.success) {
        setLinks(data.links);
        setError(null);
      } else {
        setError(data.error || "Failed to fetch links");
      }
    } catch (err) {
      setError("An error occurred while fetching links");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-4">
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && links.length === 0 ? (
        <p className="text-gray-500">No links found.</p>
      ) : (
        <ul className="space-y-2">
          {links.map((link) => (
            <Link
              key={link._id}
              url={link.url}
              title={link.title}
              description={link.description}
            />
          ))}
        </ul>
      )}
    </div>
  );
}