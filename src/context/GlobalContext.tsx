import { createContext } from 'react';
import { ContextProps } from '../models';

export const GlobalContext = createContext<ContextProps>({} as ContextProps);