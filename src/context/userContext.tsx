import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserService } from "services/apis/user";
const UserContext = createContext<any>(null);
export const useUser = () => useContext(UserContext);

interface UserProviderProps {
  children: ReactNode;
  userService: UserService;
}

export function UserProvider({ children, userService }: UserProviderProps) {
  const [userData, setUserData] = useState<any>({});
  const [getPageNum, setGetPageNum] = useState<number>(0);
  const hasPageNum = (page: number) => {
    setGetPageNum(getPageNum);
    console.log(getPageNum);
  };
  useEffect(() => {
    // userService.getPost(getPageNum).then(setUserData);
  }, [getPageNum]);
  return (
    <UserContext.Provider value={{ userData, hasPageNum }}>
      {children}
    </UserContext.Provider>
  );
}