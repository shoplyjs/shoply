import React from "react";

export const AppCard = ({
    name,
    description,
    imageUrl,
    status = "Official",
}: any) => {
    return (
        <div
            style={{ background: "#21333b" }}
            className="rounded-lg p-4 flex items-center"
        >
            <div className="flex-shrink-0 mr-4">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-16 h-16 rounded-md"
                />
            </div>
            <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-1">{name}</h2>
                <p
                    className="text-sm text-gray-400 line-clamp-3"
                    style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {description}
                </p>
            </div>
            <div className="ml-auto">
                <button
                    className={`text-sm font-semibold rounded-full px-3 py-1 ${
                        status === "Official"
                            ? "bg-green-500 text-white"
                            : "bg-yellow-400 text-gray-800"
                    }`}
                >
                    {status}
                </button>
            </div>
        </div>
    );
};
