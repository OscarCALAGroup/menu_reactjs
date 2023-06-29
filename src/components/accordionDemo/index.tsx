import React, { useState } from 'react'

const accordionData = [
    {
        "option_menu_id": 4,
        "parent_option_id": null,
        "root_id": 4,
        "resource_id": null,
        "option_name": "Menu Usuarios",
        "description": "Usarios",
        "level": 1,
        "resource_name": null,
        "resource_type_name": null,
        "prefix": null,
        "group_id": null,
        "create": null,
        "read": null,
        "update": null,
        "delete": null,
        "group_menu_id": null,
        "children": 3
    },
    {
        "option_menu_id": 7,
        "parent_option_id": 4,
        "root_id": 4,
        "resource_id": 5,
        "option_name": "Entidad Usuarios",
        "description": "Entidad",
        "level": 2,
        "resource_name": "EntyUsers",
        "resource_type_name": "Entity",
        "prefix": "Enty",
        "group_id": 1,
        "create": true,
        "read": true,
        "update": true,
        "delete": true,
        "group_menu_id": 4,
        "children": 0
    },
    {
        "option_menu_id": 8,
        "parent_option_id": 4,
        "root_id": 4,
        "resource_id": 6,
        "option_name": "Pantalla Usuarios",
        "description": "Usuarios",
        "level": 2,
        "resource_name": "ScrnUsers",
        "resource_type_name": "Entity",
        "prefix": "Enty",
        "group_id": 1,
        "create": true,
        "read": true,
        "update": true,
        "delete": true,
        "group_menu_id": 4,
        "children": 2
    },
    {
        "option_menu_id": 13,
        "parent_option_id": 8,
        "root_id": 4,
        "resource_id": 6,
        "option_name": "SubRecurso",
        "description": "SubRecurso Usuarios",
        "level": 3,
        "resource_name": "ScrnUsers",
        "resource_type_name": "Entity",
        "prefix": "Enty",
        "group_id": 1,
        "create": true,
        "read": true,
        "update": true,
        "delete": true,
        "group_menu_id": 4,
        "children": 0
    },
    {
        "option_menu_id": 14,
        "parent_option_id": 4,
        "root_id": 4,
        "resource_id": null,
        "option_name": "Prueba ",
        "description": "Prueba description",
        "level": 2,
        "resource_name": null,
        "resource_type_name": null,
        "prefix": null,
        "group_id": null,
        "create": null,
        "read": null,
        "update": null,
        "delete": null,
        "group_menu_id": null,
        "children": 1
    },
    {
        "option_menu_id": 15,
        "parent_option_id": 14,
        "root_id": 4,
        "resource_id": 1,
        "option_name": "SubRecurso",
        "description": "SubRecurso Usuarios",
        "level": 3,
        "resource_name": "EntySalesPreorders",
        "resource_type_name": "Entity",
        "prefix": "Enty",
        "group_id": 1,
        "create": true,
        "read": true,
        "update": true,
        "delete": true,
        "group_menu_id": 4,
        "children": 0
    }
]

const SubMenu = ({ item, nestedLevels }: any) => {
    const [collapse, setCollapse] = useState(false);

    const handleCollapse = () => {
        setCollapse(collapse === false ? true : false);
    }

    const hasChildren = (item: any) => {
        let myArray = accordionData.filter(x => x.level === item.children - 1);
        return Array.isArray(myArray) && myArray.length > 0;
    };

    return (
        <>
            <div>
                <span
                    onClick={handleCollapse}
                    style={{ cursor: hasChildren(item) ? "pointer" : "" }}
                >
                    {item.option_name}
                    {item.children > 0 && <span>{collapse === true ? " - " : " + "}</span>}
                </span>
            </div>
            {collapse &&
                <div style={{ marginLeft: "1rem" }}>
                    {hasChildren(item) && nestedLevels(accordionData.filter(x => x.level === item.children - 1))}
                </div>
            }
        </>
    )
}

export const AccordionDemo = () => {
    const nestedLevels = (data: any) => {
        return data.map((item: any, index: any) => {
            return (
                <>
                    <SubMenu key={index} item={item} nestedLeveles={nestedLevels} />
                </>
            )
        });
    }

    return nestedLevels(accordionData);
}

