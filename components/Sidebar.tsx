'use client'
import { useState } from "react";
import SidebarItem from "./SidebarItem";

type SidebarItem = {
    type: string;
    text: string;
    icon: string;
};


export default function Sidebar() {
    const [itemSelected, setItemSelected] = useState('trang-chu');

    const handleChangeItemSelect = (itemSelected: string, event: Object) => {
        setItemSelected(itemSelected);
    }

    const menu: SidebarItem[] = [
        {
            type: 'trang-chu',
            text: 'Trang chủ',
            icon: 'house'
        },
        {
            type: 'gym',
            text: 'Gym',
            icon: 'dumbbell'
        },
        {
            type: 'thumbnail',
            text: 'Thumbnail',
            icon: 'image'
        },
        {
            type: 'karaoke',
            text: 'Karaoke',
            icon: 'microphone'
        },
    ];

    return (
        <ul className="w-[100px] p-[10px] h-full flex flex-col gap-[5px]">
            {
                menu.map((item: SidebarItem) => {
                    return <SidebarItem nameIcon={item.icon} key={item.type} valueSelected={itemSelected} titleItem={item.text} typeItem={item.type} onChangeItemSelect={handleChangeItemSelect}></SidebarItem>;
                })
            }
        </ul>
    );
}
