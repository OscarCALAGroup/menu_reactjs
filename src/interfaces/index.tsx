export interface Item {
    option_menu_id: number;
    parent_option_id: number | null;
    root_id: number;
    resource_id: number | null;
    option_name: string;
    description: string;
    level: number;
    resource_name: null | string;
    resource_type_name: null | string;
    prefix: null | string;
    group_id: number | null;
    create: boolean | null;
    read: boolean | null;
    update: boolean | null;
    delete: boolean | null;
    group_menu_id: number | null;
    children: number;
}

export interface InterfaceFormat{
    arreglo: Array<Item>;
}
