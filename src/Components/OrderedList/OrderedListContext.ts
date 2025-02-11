import { createContext } from 'react';
import { ListContextValue } from './types';

export const ListContext = createContext<ListContextValue | null>(null);
