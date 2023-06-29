import React, { useEffect, useState } from 'react'
import { InterfaceFormat, Item } from '../../interfaces';

export const FormatMenu = ({ arreglo }: InterfaceFormat) => {
    const [dataloaded, setDataloaded] = useState(false);
    const [dataFormated, setDataFormated] = useState([]);

    const LoadFormat = () => {
        let newJson = [];
        arreglo.forEach((element: Item) => {
            
        });
    }

    useEffect(() => {
        LoadFormat();
        setDataloaded(true);
    }, []);

    return (
        <>
            {dataloaded &&
                <div>
                    {JSON.stringify(arreglo)}
                </div>
            }
        </>
    )
}
