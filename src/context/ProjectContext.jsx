import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {

    const [projectDetails, setProjectDetails] = useState({
        modelEditing: false,
        stlConversion: false,
        modelCut: false,
        connectionProfileDesign: false,
        multiColor: false,
        customFilamentPurchase: false,
        gluing: false,

        totalPlate: 1,
        totalFilament: 0,
        totalPrintingTime: 0,

        suggestedPrice: 100,
        totalSpent: 0,
        totalProfit: 100
    });

    return (
        <ProjectContext.Provider value={{ projectDetails, setProjectDetails }}>
            {children}
        </ProjectContext.Provider>
    );
};