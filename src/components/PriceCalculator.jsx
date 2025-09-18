import { useEffect, useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext'

const PriceCalculator = () => {
    const { projectDetails, setProjectDetails } = useContext(ProjectContext);

    useEffect(() => {
        let basePrice = 0;
        let totalCost = 0;

        // Add base price for each service
        if (projectDetails.modelEditing) basePrice += 200;
        if (projectDetails.stlConversion) basePrice += 50;
        if (projectDetails.modelCut) basePrice += 100;
        if (projectDetails.connectionProfileDesign) basePrice += 200;
        if (projectDetails.multiColor) basePrice += 100;
        if (projectDetails.customFilamentPurchase) totalCost += 800;
        if (projectDetails.gluing) basePrice += 50;

        // Add plate cost (50₺ per additional plate)
        basePrice += (projectDetails.totalPlate - 1) * 50;

        // Calculate filament cost (assuming 1g = 0.8₺)
        const filamentCost = projectDetails.totalFilament * 0.8;

        // Calculate printing time cost (assuming 1 hour = 30₺)
        let printingTimeCost = 0;
        if (projectDetails.totalPrintingTime && projectDetails.totalPrintingTime !== '') {
            printingTimeCost = (Number(projectDetails.totalPrintingTime) / 60) * 50;
        }

        // Calculate total cost
        totalCost += Math.ceil(filamentCost + printingTimeCost);

        // Calculate profit (assuming 30% profit margin)
        const profit = Math.ceil(totalCost * 0.4 + basePrice);

        setProjectDetails(prev => ({
            ...prev,
            totalSpent: totalCost,
            totalProfit: profit,
            suggestedPrice: totalCost + profit
        }));
    }, [
        projectDetails.modelEditing,
        projectDetails.stlConversion,
        projectDetails.modelCut,
        projectDetails.connectionProfileDesign,
        projectDetails.multiColor,
        projectDetails.customFilamentPurchase,
        projectDetails.gluing,
        projectDetails.totalFilament,
        projectDetails.totalPrintingTime,
        projectDetails.totalPlate,
        setProjectDetails
    ]);

    return null;
}

export default PriceCalculator