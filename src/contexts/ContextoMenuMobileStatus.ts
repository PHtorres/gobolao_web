import { createContext } from "react";
import IContextoMenuMobileStatus from "./models/IContextoMenuMobileStatus";

const ContextoMenuMobileStatus = createContext<IContextoMenuMobileStatus>({} as IContextoMenuMobileStatus);

export default ContextoMenuMobileStatus;