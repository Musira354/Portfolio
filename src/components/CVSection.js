import React from 'react';

function CVSection() {
    const canvaLink = "https://www.canva.com/design/DAGO3c3WQVM/X3ej6Yk0fhCdNKK5hMb4WQ/view?utm_content=DAGO3c3WQVM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=UNAVAILABLE"; // Replace with your Canva link

    return (
        <section className="py-20 bg-gray-50" id="cv">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800">My CV</h2>
                <p className="mt-4 text-center text-gray-600">
                    Feel free to explore my skills and experience!
                </p>
                <div className="mt-8">


                    {/* View in New Tab Button */}
                    <div className="mt-6 text-center">
                        <a
                            href={canvaLink}
                            target="_blank" // Opens link in a new tab
                            rel="noopener noreferrer" // Security best practice
                            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100  transition duration-300"
                        >
                            View CV in New Tab
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CVSection;