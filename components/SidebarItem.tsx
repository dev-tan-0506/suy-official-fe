import React from 'react';
import CustomIcon from './CustomIcon';

type IconProps = {
    nameIcon: string;
    valueSelected: string;
    titleItem: string;
    typeItem: string;
    onChangeItemSelect: Function;
};

const SidebarItem: React.FC<IconProps> = ({ nameIcon, valueSelected, titleItem, typeItem, onChangeItemSelect }) => {
    return (
        <li className={"cursor-pointer hover:bg-[#e8ebed] rounded-[16px] px-[10px] py-[20px] flex flex-col gap-[5px] items-center " + (valueSelected === typeItem && "bg-[#e8ebed]")}
            onClick={(e) => onChangeItemSelect(typeItem, e)}>
            <CustomIcon nameIcon={nameIcon}></CustomIcon>
            <span className="text-[12px]">{titleItem}</span>
        </li>
    );
};

export default SidebarItem;