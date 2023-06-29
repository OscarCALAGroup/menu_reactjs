import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";

export const AccordionMenu = () => {
  const data = [
    {
      "option_menu_id": 4,
      "parent_option_id": null,
      "root_id": 4,
      "resource_id": null,
      "option_name": "Menu Admin",
      "description": "CALA",
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
      "number_of_children": 3,
      "children": [
        {
          "option_menu_id": 7,
          "parent_option_id": 4,
          "root_id": 4,
          "resource_id": 5,
          "option_name": "Usuarios",
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
          "number_of_children": 0,
          "children": []
        },
        {
          "option_menu_id": 8,
          "parent_option_id": 4,
          "root_id": 4,
          "resource_id": 7,
          "option_name": "Grupos",
          "description": "Entidad",
          "level": 2,
          "resource_name": "EntyGroups",
          "resource_type_name": "Entity",
          "prefix": "Enty",
          "group_id": 1,
          "create": true,
          "read": true,
          "update": true,
          "delete": true,
          "group_menu_id": 4,
          "number_of_children": 1,
          "children": [
            {
              "option_menu_id": 12,
              "parent_option_id": 8,
              "root_id": 4,
              "resource_id": 9,
              "option_name": "Permisos por grupo",
              "description": "Entidad",
              "level": 3,
              "resource_name": "EntyPermissions",
              "resource_type_name": "Entity",
              "prefix": "Enty",
              "group_id": 1,
              "create": true,
              "read": true,
              "update": true,
              "delete": true,
              "group_menu_id": 4,
              "number_of_children": 0,
              "children": []
            }
          ]
        },
        {
          "option_menu_id": 9,
          "parent_option_id": 4,
          "root_id": 4,
          "resource_id": 10,
          "option_name": "Productos",
          "description": "Entidad",
          "level": 2,
          "resource_name": "EntyProducts",
          "resource_type_name": "Entity",
          "prefix": "Enty",
          "group_id": 1,
          "create": true,
          "read": true,
          "update": true,
          "delete": true,
          "group_menu_id": 4,
          "number_of_children": 2,
          "children": [
            {
              "option_menu_id": 10,
              "parent_option_id": 9,
              "root_id": 4,
              "resource_id": 11,
              "option_name": "Tipos de productos",
              "description": "Entidad",
              "level": 3,
              "resource_name": "EntyProductTypes",
              "resource_type_name": "Entity",
              "prefix": "Enty",
              "group_id": 1,
              "create": true,
              "read": true,
              "update": true,
              "delete": true,
              "group_menu_id": 4,
              "number_of_children": 0,
              "children": []
            },
            {
              "option_menu_id": 11,
              "parent_option_id": 9,
              "root_id": 4,
              "resource_id": 12,
              "option_name": "Familia de productos",
              "description": "Entidad",
              "level": 3,
              "resource_name": "EntyProductFamilies",
              "resource_type_name": "Entity",
              "prefix": "Enty",
              "group_id": 1,
              "create": true,
              "read": true,
              "update": true,
              "delete": true,
              "group_menu_id": 4,
              "number_of_children": 0,
              "children": []
            }
          ]
        }
      ]
    }
  ];
  return (
    <Accordion>
      {data[0].children.map((item, index) => (
        <AccordionItem key={index}>
          {({ open }: any) => (
            <>
              <AccordionHeader>
                <h3 className={`accordion-title ${open ? 'accordion-active' : ''}`}>{item.option_name}</h3>
              </AccordionHeader>
              <AccordionBody>
                <div className="accordion-body">
                  {item.children.map((option, index1) => {
                    return <div key={index1}>
                      {option.option_name}
                    </div>;
                  })}
                </div>
              </AccordionBody>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
