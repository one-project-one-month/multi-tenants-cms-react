import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface User {
  id: string;
  email: string;
  emailVerified: boolean;
  mfaSetup: boolean;
  onboardingComplete: boolean;
  roles: string[];
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

type Actions = {
  setIsAuthenticated: (status: boolean) => void;
  setUser: (user: User | null) => void;
  updateOnboardingStatus: (status: boolean) => void;
  updateMfaStatus: (status: boolean) => void;
  updateEmailVerifiedStatus: (status: boolean) => void;
  resetAuth: () => void;
};

type AuthStore = AuthState & Actions;

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const useAuthStore = create<AuthStore>()(
  persist(
    immer((set) => ({
      ...initialState,

      setIsAuthenticated: (status: boolean) => {
        set((state) => {
          state.isAuthenticated = status;
        });
      },

      setUser: (user: User | null) => {
        set((state) => {
          state.user = user;
          state.isAuthenticated = user !== null;
        });
      },

      updateOnboardingStatus: (status: boolean) => {
        set((state) => {
          if (state.user) {
            state.user.onboardingComplete = status;
          }
        });
      },

      updateMfaStatus: (status: boolean) => {
        set((state) => {
          if (state.user) {
            state.user.mfaSetup = status;
          }
        });
      },

      updateEmailVerifiedStatus: (status: boolean) => {
        set((state) => {
          if (state.user) {
            state.user.emailVerified = status;
          }
        });
      },

      resetAuth: () => {
        set(() => {
          // Reset the state to its initial values
          localStorage.removeItem('authToken'); // Clear token from storage as well
          return initialState;
        });
      },
    })),
    {
      name: 'auth-credentials',
      storage: createJSONStorage(() => localStorage),

      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user ? { ...state.user, roles: state.user.roles } : null,
      }),
    }
  )
);

export default useAuthStore;
