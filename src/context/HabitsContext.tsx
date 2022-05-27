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
import { useRouter } from "next/router";

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
  createNewHabitRequest: (habitName: string, days: number[]) => void;
  deleteHabitRequest: (id: number) => void;
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
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const tokenHashed = localStorage.getItem("token");

    if (tokenHashed) {
      setToken(decodeTokenHash(tokenHashed));
    }
  }, [router]);

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
  }, [token, newHabit, habitExcluded]);

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
  }, [token]);

  async function createNewHabitRequest(habitName: string, days: Array<number>) {
    const createNewHabitRequestObject = {
      name: habitName,
      days,
    };

    setNewHabit(createNewHabitRequestObject);

    try {
      await api.post("/habits", createNewHabitRequestObject, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      console.log(e); //TODO
    }
  }

  async function deleteHabitRequest(id: number) {
    console.log(id);
    try {
      await api.delete(`/habits/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHabitExcluded(false);
    } catch (e) {
      console.log(e); //TODO
    }
  }

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
        createNewHabitRequest,
        deleteHabitRequest,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsContext;
