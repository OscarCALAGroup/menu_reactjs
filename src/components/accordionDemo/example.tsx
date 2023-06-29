import React from 'react'

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
        "children": 3,
        "child": [
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
                "children": 0,
                "child":[]
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
                "children": 1,
                "child":[
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
                        "children": 0,
                        "child":[]
                    }
                ]
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
                "children": 2,
                "child":[
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
                        "children": 0,
                        "child":[]
                    }
                ]
            }
        ]
    }
]

const SubLevelComp = ({ item, renderNestedLevels }: any) => {
    const [selected, setselected] = React.useState("");

    const toggle = () => {
        setselected(selected === "" ? "active" : "");
    };

    const hasChildren = (item: any) => {
        return Array.isArray(item.child) && item.child.length > 0;
    };

    return (
        <div>
            <p
                onClick={() => toggle()}
                style={{ cursor: hasChildren(item) ? "pointer" : "" }}
            >
                {item.option_name}{" "}
                {hasChildren(item) && <span>{selected === "active" ? "-" : "+"}</span>}
            </p>
            {selected && (
                <div style={{ marginLeft: "20px" }}>
                    {hasChildren(item) && renderNestedLevels(item.child)}
                </div>
            )}
        </div>
    );
};

export const AccordionExample = () => {
    const renderNestedLevels = (data: any) => {
        return data.map((item: any, itemIndex: any) => (
            <SubLevelComp item={item} renderNestedLevels={renderNestedLevels} key={itemIndex} />
        ));
    };

    return renderNestedLevels(accordionData);
}

