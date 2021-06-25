import { useCallback, useState } from "react";
import MenuMobile from "../../components/MenuMobile";
import ContextoMenuMobileStatus from "../ContextoMenuMobileStatus";

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