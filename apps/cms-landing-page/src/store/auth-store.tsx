import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
  name: string | null;
  email: string | null;
  isLoggedIn: boolean;
};

const initialState: State = {
  name: null,
  email: null,
  isLoggedIn: false,
};

type Actions = {
  setAuth: (name: string, email: string) => void;
  clearAuth: () => void;
};

const useAuthStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      ...initialState,

      setAuth: (name: string, email: string) => {
        set((state) => {
          state.name = name;
          state.email = email;
          state.isLoggedIn = true;
        });
      },

      clearAuth: () => set(initialState),
    })),
    {
      name: 'auth-credentials',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
