import React from 'react';
import ProfilePage from '../page/Profile/ProfilePage';
import MapPage from '../page/Map/MapPage';
import Timer from '../page/Timer/Timer';
export interface IRoute {
  path: string;
  element: React.ComponentType;
}
export enum RouteNames {
  PROFILE = '/',
  MAP = '/map',
  TIMER = '/timer',
}
export const routes: IRoute[] = [
  { path: RouteNames.PROFILE, element: ProfilePage },
  { path: RouteNames.MAP, element: MapPage },
  { path: RouteNames.TIMER, element: Timer },
];
