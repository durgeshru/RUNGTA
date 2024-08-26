import React, { useState, useEffect } from 'react';
import './home.css';

function Home() {

  const ProjectStatistics = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0]);

    useEffect(() => {
      const targetCounts = [10000, 12500, 3000, 200]; 
      const durations = [2000, 2000, 2000, 2000]; 

      targetCounts.forEach((target, index) => {
        let start = 0;
        const end = target;
        const increment = Math.ceil(end / (durations[index] / 50));
        
        const timer = setInterval(() => {
          start += increment;
          if (start > end) {
            start = end;
            clearInterval(timer);
          }
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = start;
            return newCounts;
          });
        }, 50);
      });
    }, []);

    return (
      <>
      <div className='mt-5'>
        <div className="sectiontitle">
  
          <span className="headerLine"></span>
        </div>

        <div id="projectFacts" className="sectionClass">
          <div className="projectFactsWrap mx-auto">
            <div className="item">
              <i className="bi bi-pc-display-horizontal text-danger"></i>
              <p id="number1" className="number">{counts[0]}</p>
              <span></span>
              <p>Successful Surgeries</p>
            </div>
            <div className="item">
              <i className="bi bi-emoji-smile text-danger"></i>
              <p id="number2" className="number">{counts[1]}</p>
              <span></span>
              <p>People Trust Us</p>
            </div>
            <div className="item">
              <i className="bi bi-cup-hot text-danger"></i>
              <p id="number3" className="number">{counts[2]}</p>
              <span></span>
              <p>Accredited Consultants </p>
            </div>
            <div className="item">
                    <p id="number4" className="number">{counts[3]}</p>
              <span></span>
              <p>Rated 4.8/5 on Google  </p>
            </div>
          </div>
        </div>
      </div>

      </>
    );
  };

  return (
    <>
      <div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner" style={{ height: "800px", objectFit: "cover" }}>
            <div className="carousel-item active">
              <img src="https://existek.com/wp-content/uploads/2019/05/hospital-management-system-post-cover-image.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://existek.com/wp-content/uploads/2019/05/hospital-management-system-post-cover-image.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://existek.com/wp-content/uploads/2019/05/hospital-management-system-post-cover-image.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div>
        <ProjectStatistics />
      </div>

      <div>
        <div><img src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-05/240513-women-surgeons-se-1215p-de7fda.jpg" alt="" />
        </div>
      </div>
    </>
  );
}


export default Home;
