import React from "react";

const KnowUsBetter: React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full px-4 py-8 md:px-8">
            <div className="mb-6 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold">Know Us Better!</h2>
            </div>
            <div className="w-full ">
                <iframe
                    src="https://www.youtube.com/embed/3ddNUYWSExQ"
                    frameBorder="0"
                    width="100%"
                    height="400"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    id="fitvid794441"
                    className="rounded-lg shadow-lg"
                ></iframe>
            </div>
        </div>
    );
};

export default KnowUsBetter;
