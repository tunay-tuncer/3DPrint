import React, { useContext, useEffect, useState } from 'react'
import { ProjectContext } from '../context/ProjectContext'

const Settings = () => {
    const { projectDetails, setProjectDetails } = useContext(ProjectContext);

    const [plateCount, setPlateCount] = useState(1);
    const [filamentWeight, setFilamentWeight] = useState(0);
    const [printingHour, setPrintingHour] = useState(0);
    const [printingMinute, setPrintingMinute] = useState(0);


    const topSettings = [
        {
            id: 1,
            name: 'Model Editing',
            context: "modelEditing"
        },
        {
            id: 2,
            name: '.stl  Conversion',
            context: "stlConversion"
        },
        {
            id: 3,
            name: 'Model Cut',
            context: "modelCut"
        },
        {
            id: 4,
            name: 'Connection Profile Design',
            context: "connectionProfileDesign"
        },
        {
            id: 5,
            name: 'Multi Color',
            context: "multiColor"
        },
        {
            id: 6,
            name: 'Custom Filament Purchase',
            context: "customFilamentPurchase"
        },
        {
            id: 7,
            name: 'Gluing',
            context: "gluing"
        },

    ]

    useEffect(() => {
        const totalTime = (parseInt(printingHour) * 60) + parseInt(printingMinute);
        setProjectDetails(prev => ({
            ...prev,
            totalFilament: filamentWeight,
            totalPrintingTime: totalTime
        }));
    }, [filamentWeight, printingHour, printingMinute]);


    function decreasePlateCount() {
        if (plateCount > 1) {
            const newCount = plateCount - 1;
            setPlateCount(newCount);
            setProjectDetails(prev => ({ ...prev, totalPlate: newCount }));
        }
    }

    function increasePlateCount() {
        if (plateCount < 6) {
            const newCount = plateCount + 1;
            setPlateCount(newCount);
            setProjectDetails(prev => ({ ...prev, totalPlate: newCount }));
        }
    }

    return (
        <div className='settings-container'>

            <ul className='top-settings-container'>
                {topSettings.map((option) => (

                    <li key={option.id}>
                        <p>{option.name}</p>
                        <button className='toggle-button' onClick={() => setProjectDetails(prev => ({ ...prev, [option.context]: !prev[option.context] }))} >
                            <div className='thumb' style={{ left: projectDetails[option.context] ? 'calc(100% - 2rem)' : '0' }}></div>
                        </button>
                    </li>

                ))}
            </ul>

            <ul className='bottom-settings-container'>

                <div className="plate-filament-container">

                    <div className="plate-count-container">
                        <p>Total Plate</p>
                        <div className="plate-button-container">
                            <button className='plate-filament-button' onClick={() => decreasePlateCount()}>-</button>
                            <p>{plateCount}</p>
                            <button className='plate-filament-button' onClick={() => increasePlateCount()}>+</button>
                        </div>
                    </div>

                    <div className="total-filament-container">
                        <p>Total Filament</p>
                        <div className="filament-input-container">
                            <input className='filament-input' type="number" value={filamentWeight} onChange={(e) => setFilamentWeight(e.target.value)} />
                        </div>
                    </div>

                </div>

                <div className="total-printing-time-container">
                    <p>Total Printing Time</p>

                    <div className="total-printing-time-input-container">
                        <div className="total-printing-time-input-div">
                            <input className='printing-time-input' type="number" value={printingHour} onChange={(e) => setPrintingHour(e.target.value)} />
                            <p>h</p>
                        </div>
                        <div className="total-printing-time-input-div">
                            <input className='printing-time-input' type="number" value={printingMinute} onChange={(e) => setPrintingMinute(e.target.value)} />
                            <p>m</p>
                        </div>
                    </div>

                </div>

            </ul>

        </div >
    )
}

export default Settings