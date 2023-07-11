import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



// card has attributes .className, .image, .name, .position,
//   .discipline [is "discipline+year"],

const Proj = ({proj}) => {

    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
          try {
            const imageModule = await import(`./images/${proj.image[0]}`);
            const image = imageModule.default;
            setImageSrc(image);
          } catch (error) {
            console.error('Error loading image:', error);
          }
        };
    
        loadImage();
      }, [proj.image]);


  return <>

    <div className="card card-compact w-96 bg-base-300 shadow-xl">
        <img className="projCardImg" src={imageSrc} alt={proj.image[1]} />
        <div className="card-body">
            <h2 className="card-title">{proj.title}</h2>
            <p>{proj.description}</p>
            <div class="divider" style={{margin: 0 + 'em'}}></div>
            {proj.acceptedTo.map((conf) => {
                return (
                    <div className="badge badge-outline">{conf}</div>
                    );
                }
            )}
            
            <div className="card-actions justify-end" style={{marginTop: 1 + 'em'}}>
                {proj.projectPage.length > 0 ? <button className="btn btn-primary"> <Link href={proj.projectPage}>Project Page</Link> </button> : <></>}
                {proj.arxiv.length > 0 ? <button className="btn btn-primary"> <Link href={proj.arxiv}>ArXiv</Link> </button> : <></>}
                {proj.github.length > 0 ? <button className="btn btn-primary"> <Link href={proj.github}>Github</Link> </button> : <></>}
            </div>
        </div>
    </div>
  </>;
}

export default Proj;
