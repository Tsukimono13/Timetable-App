
import { DropdownDirection } from '../../types/ui';
import cls from './Dropdown.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.bottom_left,
    'bottom right': cls.bottom_right,
    'top right': cls.top_right,
    'top left': cls.top_left,
};
