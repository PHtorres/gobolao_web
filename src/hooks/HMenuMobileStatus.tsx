import React, { createContext, useCallback, useState, useContext } from 'react';
import MenuMobile from '../components/MenuMobile';

interface IContextoMenuMobileStatus {
    exibirMenuMobile(): void;
    esconderMenuMobile(): void;
}

const ContextoMenuMobileStatus = createContext<IContextoMenuMobileStatus>({} as IContextoMenuMobileStatus);

export const MenuMobileStatusProvider: React.FC = ({ children }) => {

    const [visivel, setVisivel] = useState(false);

    const exibirMenuMobile = useCallback(() => {
        setVisivel(true);
    }, []);

    const esconderMenuMobile = useCallback(() => {
        setVisivel(false);
    }, []);

    return (
        <ContextoMenuMobileStatus.Provider value={{ exibirMenuMobile, esconderMenuMobile }}>
            {children}
            {visivel && <MenuMobile />}
        </ContextoMenuMobileStatus.Provider>
    );
}

export const useMenuMobileStatus = (): IContextoMenuMobileStatus => {
    const contexto = useContext(ContextoMenuMobileStatus);
    return contexto;
}