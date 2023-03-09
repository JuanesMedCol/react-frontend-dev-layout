export interface ItemMenu {
    name: string,
    icon: string
    path: string | null,
    menuActive: string[],
    children: SecondLeveltemMenu[] | null
}

export interface SecondLeveltemMenu {
    name: string,
    path: string | null,
    children: ThirdLevelItemMenu[] | null,

}

export interface ThirdLevelItemMenu {
    name: string,
    path: string,
}

interface Menu {
    items: ItemMenu[]
}

export const MenuPlatform: Menu = {
    items: [
        {
            name: 'Menu Principal',
            icon: 'ArchiveIcon',
            menuActive: ['/example', ],
            path: null,
            children: [
                {
                    name: 'Ejemplo',
                    path: '/example',
                    children: null,
                },
            ]

        },
    ]
}