import { lazy } from "react";

const Home = lazy(() => import('../views/home'));
const Dashboard = lazy(() => import('../views/dashboard'));
const IndustryNews = lazy(() => import('../views/dashboard/industry-news'));
const AddIndustryNews = lazy(() => import('../views/dashboard/industry-news-add'));
const Article = lazy(() => import('../views/dashboard/article'));

export const routes = [
    { path: '/', name: 'Dashboard Home', exact: true, component: Dashboard},
    { path: '/industry-news', name: 'Industry News', exact: true, component: IndustryNews},
    { path: '/industry-news/:id', name: 'Industry News', exact: true, component: Article},
    { path: '/industry-news/add', name: 'Add News', exact: true, component: AddIndustryNews},
];

export const mainRoutes = [
    { path: '/', name: 'Home', exact: true, component: Home },
];