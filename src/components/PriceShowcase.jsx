import { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext'


const PriceShowcase = () => {
    const { projectDetails } = useContext(ProjectContext);

    return (
        <div className='price-showcase-container'>
            <h1 className='suggested-price'>{`${projectDetails.suggestedPrice} ₺`}</h1>
            <div className="details-container">
                <p>{`Total spent: ${projectDetails.totalSpent} ₺`} </p>
                <p>{`Total profit: ${projectDetails.totalProfit} ₺`} </p>
            </div>
        </div>
    )
}

export default PriceShowcase