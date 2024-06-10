import { ReactComponent as MainIcon } from '../../../shared/assets/icons/main.svg';
import { ReactComponent as TimetableIcon } from '../../../shared/assets/icons/timetable.svg';
import { ReactComponent as WalletIcon } from '../../../shared/assets/icons/wallet.svg';
import { ReactComponent as AchievementsIcon } from '../../../shared/assets/icons/achivements.svg';
import { ReactComponent as QuestionIcon } from '../../../shared/assets/icons/question.svg';
import { ReactComponent as SettingsIcon } from '../../../shared/assets/icons/Settings.svg';
import { ReactComponent as ConnectionIcon } from '../../../shared/assets/icons/connection.svg';
import { ReactComponent as LibraryIcon } from '../../../shared/assets/icons/library.svg';
import { ReactComponent as TrainingIcon } from '../../../shared/assets/icons/puzzle.svg';
import { AppRoutes, RoutePath } from '../../../shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    styleType?: 'fill' | 'stroke';
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        Icon: MainIcon,
        text: 'Главная',
        styleType: 'fill',
    },
    {
        path: RoutePath[AppRoutes.TIMETABLE],
        Icon: TimetableIcon,
        text: 'Расписание',
        styleType: 'stroke',
    },
    {
        path: RoutePath[AppRoutes.PAYMENT],
        Icon: WalletIcon,
        text: 'Оплата',
        styleType: 'stroke',
    },
    {
        path: RoutePath[AppRoutes.ACHIEVEMENTS],
        Icon: AchievementsIcon,
        text: 'Достижения',
        styleType: 'fill',
    },
    {
        path: RoutePath[AppRoutes.TRAININGS],
        Icon: TrainingIcon,
        text: 'Тренажеры',
        styleType: 'stroke',
    },
    {
        path: RoutePath[AppRoutes.LIBRARY],
        Icon: LibraryIcon,
        text: 'Библиотека',
        styleType: 'fill',
    },
    {
        path: RoutePath[AppRoutes.CONNECTION],
        Icon: ConnectionIcon,
        text: 'Проверка связи',
        styleType: 'stroke',
    },
    {
        path: RoutePath[AppRoutes.SETTINGS],
        Icon: SettingsIcon,
        text: 'Настройки',
        styleType: 'stroke',
    },
    {
        path: RoutePath[AppRoutes.QUESTIONS],
        Icon: QuestionIcon,
        text: 'Вопросы',
        styleType: 'stroke',
    },
];