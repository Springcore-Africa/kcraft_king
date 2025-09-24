import React from 'react'
import {useNavigate} from 'react-router-dom'

function Card(props) {
    const {
        id,
        img, 
        buildingName, 
        desc,
        gallery,
        finishedProject,
        buildingProgress,
        floorPlan,
        features,
    } = props;

    const navigate = useNavigate();
    

    const goToProject = () => {
        navigate(`/project?query=${id}`, {state: {
            img, 
            buildingName, 
            desc,
            gallery,
            floorPlan,
            finishedProject, 
            buildingProgress,
            features,
        }});
        console.log({
            id,
            img,
            buildingName,
            desc,
            gallery,
            floorPlan,
            finishedProject,  
            buildingProgress,
            features,
        })
    }

    return (
        <div className='' onClick={goToProject}>
            <div className=' aspect-square overflow-hidden rounded-md'>
              <img src={img} alt="" className='size-full object-cover'/>
            </div>
            <p className=' font-semibold text-lg'>
              {buildingName}
            </p>
        </div>
    )
}

export default Card
