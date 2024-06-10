import { MainPage } from '../../../pages/MainPage';
import { TimetablePage } from '../../../pages/TimetablePage';
import { SignInPage } from '../../../pages/SignInPage';

interface AppRouteProps {
    path: string;
    element: JSX.Element;
}

export enum AppRoutes {
    MAIN = 'main',
    TIMETABLE = 'timetable',
    PAYMENT = 'payment',
    ACHIEVEMENTS = 'achievements',
    TRAININGS = 'trainings',
    LIBRARY = 'library',
    CONNECTION = 'connection',
    SETTINGS = 'settings',
    QUESTIONS = 'questions',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.TIMETABLE]: '/timetable',
    [AppRoutes.PAYMENT]: '/payment', 
    [AppRoutes.ACHIEVEMENTS]: '/achievements',
    [AppRoutes.TRAININGS]: '/trainings',
    [AppRoutes.LIBRARY]: '/library',
    [AppRoutes.CONNECTION]: '/connection',
    [AppRoutes.SETTINGS]: '/settings',
    [AppRoutes.QUESTIONS]: '/questions',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.TIMETABLE]: {
        path: RoutePath.timetable,
        element: <TimetablePage />,
    },
    [AppRoutes.PAYMENT]: {
        path: RoutePath.payment,
        element: <SignInPage />,
    },
    [AppRoutes.ACHIEVEMENTS]: {
        path: RoutePath.achievements,
        element: <SignInPage />,
       
    },
    [AppRoutes.TRAININGS]: {
        path: RoutePath.trainings,
        element: <SignInPage />,

    },
    [AppRoutes.LIBRARY]: {
        path: RoutePath.library,
        element: <SignInPage />,
    },
    [AppRoutes.CONNECTION]: {
        path: RoutePath.connection,
        element: <SignInPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.settings,
        element: <SignInPage />,
    },
    [AppRoutes.QUESTIONS]: {
        path: RoutePath.questions,
        element: <SignInPage />,
    },
};
