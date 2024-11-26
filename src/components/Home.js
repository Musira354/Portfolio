import React from 'react';
import profileImage from '../images/myImage.png';


const Home = ({ onScrollToProjects, }
) => {
    return (
        <section className="h-screen flex  items-center justify-center gap-7 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            {/* <img src={profileImage} alt="Musira Khan" className='w-46    scale-125' /> */}

            <div className="text-center">
                <h1 className="text-4xl font-bold">Hello, I'm Musira Khan</h1>
                <p className="mt-4 text-lg">Full Stack Software Engineer</p>
                <button onClick={onScrollToProjects} className="mt-6 px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100">
                    View My Work
                </button>
            </div>
        </section>
    );
}

export default Home;
