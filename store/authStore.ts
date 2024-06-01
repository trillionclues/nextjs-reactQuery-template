import { queryClient } from "@/utils/init";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthStore {
  isLoading: boolean;
  isAuthenticated: boolean;
  token: string | null;
  setLoading: (loading: boolean) => void;
  setToken: (token: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isLoading: false,
      isAuthenticated: false,
      token: null,
      _hasHydrated: false,
      setLoading: (loading) => set({ isLoading: loading }),
      setToken: (token) => set({ token: token }),
      setIsAuthenticated: (isAuthenticated) =>
        set({ isAuthenticated: isAuthenticated }),
      logout: () =>
        set(() => {
          queryClient.clear();
          return { token: "", isAuthenticated: false };
        }),
    }),
    {
      name: "authStore",
      storage: createJSONStorage(
        JSON.parse(localStorage.getItem("authStore") || "null") || {}
      ),
    }
  )
);
