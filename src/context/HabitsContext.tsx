import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/axios";
import UserContext from "./UserContext";
import { decodeTokenHash } from "../utils/tokenHash";

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
  newHabit: Habit;
  setNewHabit: (newHabit: Habit) => void;
  setHabitExcluded: (excluded: boolean) => void;
  todayHabits: TodayHabitProps[];
  setTodayHabits: (todayHabits: TodayHabitProps[]) => void;
}

export interface TodayHabitProps {
  id: number;
  name: string;
  done: boolean;
  currentSequence: number;
  highestSequence: number;
}

const HabitsContext = createContext<HabitsContextProps>(
  {} as HabitsContextProps
);

export const HabitsDataProvider = ({ children }: HabitsDataProviderProps) => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newHabit, setNewHabit] = useState<Habit>({ name: "", days: [] });
  const [habitExcluded, setHabitExcluded] = useState(false);
  const [todayHabits, setTodayHabits] = useState<TodayHabitProps[]>([]);
  const { userData } = useContext(UserContext);
  const [token, setToken] = useState("");

  useEffect(() => {
    const tokenHashed = localStorage.getItem("token");

    if (tokenHashed) {
      setToken(decodeTokenHash(tokenHashed));
    }
  }, []);

  useEffect(() => {
    async function getHabits() {
      try {
        const { data } = await api.get("/habits", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setHabits(data);
      } catch (e) {
        console.log(e); //TODO
      }
    }

    getHabits();
  }, [userData.token, newHabit, habitExcluded]);

  useEffect(() => {
    async function getTodayHabits() {
      try {
        const { data } = await api.get("/habits/today", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTodayHabits(data);
      } catch (e) {
        console.log(e); //TODO
      }
    }

    getTodayHabits();
  }, [userData.token, todayHabits]);

  return (
    <HabitsContext.Provider
      value={{
        habits,
        setHabits,
        newHabit,
        setNewHabit,
        setHabitExcluded,
        setTodayHabits,
        todayHabits,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsContext;
