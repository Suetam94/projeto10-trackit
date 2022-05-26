import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/axios";
import UserContext from "./UserContext";

interface HabitsDataProviderProps {
  children: ReactNode;
}

export interface Habit {
  id?: number;
  name: string;
  days: Array<number>;
}

interface HabitsContextProps {
  habits: Habit[];
  setHabits: (habits: Habit[]) => void;
}

const HabitsContext = createContext<HabitsContextProps>(
  {} as HabitsContextProps
);

export const HabitsDataProvider = ({ children }: HabitsDataProviderProps) => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    async function getHabits() {
      try {
        const { data } = await api.get("/habits", {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        });

        setHabits(data);
      } catch (e) {
        console.log(e); //TODO
      }
    }

    getHabits();
  }, [userData.token]);

  return (
    <HabitsContext.Provider value={{ habits, setHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsContext;
