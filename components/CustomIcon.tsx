import React from 'react';

type IconProps = {
    nameIcon: string;
};

const Icon: React.FC<IconProps> = ({ nameIcon }) => {
    return <i className={"fa-solid fa-" + nameIcon}></i>;
};

export default Icon;