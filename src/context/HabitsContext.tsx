import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/axios";
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
  setHabitsHistoric: (habitsHistoric: Historic[]) => void;
  habitsHistoric: Historic[];
}

export interface TodayHabitProps {
  id: number;
  name: string;
  done: boolean;
  currentSequence: number;
  highestSequence: number;
}

export interface HabitsHistoric {
  id: number;
  name: string;
  date: string;
  weekDay: number;
  historyId: number;
  done: boolean;
}

export interface Historic {
  day: string;
  habits: HabitsHistoric[];
}

const HabitsContext = createContext<HabitsContextProps>(
  {} as HabitsContextProps
);

export const HabitsDataProvider = ({ children }: HabitsDataProviderProps) => {
  const { userData } = useContext(UserDataContext);
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newHabit, setNewHabit] = useState<Habit>({ name: "", days: [] });
  const [todayHabits, setTodayHabits] = useState<TodayHabitProps[]>([]);
  const [habitsHistoric, setHabitsHistoric] = useState<Historic[]>([]);
  const [habitExcluded, setHabitExcluded] = useState(false);
  const [token, setToken] = useState(userData.token);
  const [habitsIdChangedCheckState, setHabitsIdChangedCheckState] = useState<
    number[]
  >([]);

  const router = useRouter();

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
  }, [token, newHabit, habitsIdChangedCheckState]);

  useEffect(() => {
    async function getHabitsHistoric() {
      try {
        const { data } = await api.get("/habits/history/daily", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setHabitsHistoric(data);
      } catch (e) {
        console.log(e); //TODO
      }
    }

    getHabitsHistoric();
  }, [token, habitsHistoric]);

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
    try {
      await api.post(`/habits/${id}/check`, "", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setHabitsIdChangedCheckState([...habitsIdChangedCheckState, id]);
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

      setHabitsIdChangedCheckState([...habitsIdChangedCheckState, id]);
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
        habitsHistoric,
        setHabitsHistoric,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsContext;
