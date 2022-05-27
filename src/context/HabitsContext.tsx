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
import UserDataContext from "./UserContext";

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
  checkHabitRequest: (id: number) => Promise<boolean>;
  uncheckHabitRequest: (id: number) => Promise<boolean>;
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
  const { userData } = useContext(UserDataContext);
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newHabit, setNewHabit] = useState<Habit>({ name: "", days: [] });
  const [habitExcluded, setHabitExcluded] = useState(false);
  const [todayHabits, setTodayHabits] = useState<TodayHabitProps[]>([]);
  const [token, setToken] = useState(userData.token);

  const router = useRouter();

  console.log(token);

  useEffect(() => {
    const tokenHashed = localStorage.getItem("token");

    if (tokenHashed) {
      setToken(decodeTokenHash(tokenHashed));
    }
  }, [router, userData]);

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
  }, [token, newHabit]);

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

  async function checkHabitRequest(id: number) {
    console.log(id);
    try {
      await api.post(`/habits/${id}/check`, "", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return true;
    } catch (e) {
      console.log(e); //TODO
      return false;
    }
  }

  async function uncheckHabitRequest(id: number) {
    try {
      await api.post(`/habits/${id}/uncheck`, "", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return true;
    } catch (e) {
      console.log(e); //TODO
      return false;
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
        checkHabitRequest,
        uncheckHabitRequest,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsContext;
