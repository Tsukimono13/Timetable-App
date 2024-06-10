import React, { memo } from 'react';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from '../../../../shared/UI/AppLink';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/SideBarItems';
import { NavLink } from 'react-router-dom';


interface SidebarItemProps {
    item: SidebarItemType;
}

const SidebarItem = memo((props: SidebarItemProps) => {
    const { item } = props;
    const iconClass = classNames(cls.icon, {
        [cls.fill]: item.styleType === 'fill',
        [cls.stroke]: item.styleType === 'stroke',
    });

    return (
        <NavLink
            to={item.path}
            className={({ isActive }) => classNames(cls.item, { [cls.active]: isActive })}
        >
            <item.Icon width={24} height={24} className={iconClass} />
            <span className={cls.link}>{item.text}</span>
        </NavLink>
    );
});

export default SidebarItem;
