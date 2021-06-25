import { createContext } from 'react';
import IContextoAlerta from './models/IContextoAlerta';

const ContextoAlerta = createContext<IContextoAlerta>({} as IContextoAlerta);

export default ContextoAlerta;