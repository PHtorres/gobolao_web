import { useContext } from "react";
import ContextoMenuMobileStatus from "../ContextoMenuMobileStatus";
import IContextoMenuMobileStatus from "../models/IContextoMenuMobileStatus";

const useMenuMobileStatus = (): IContextoMenuMobileStatus => {
    const contexto = useContext(ContextoMenuMobileStatus);
    return contexto;
}

export default useMenuMobileStatus;