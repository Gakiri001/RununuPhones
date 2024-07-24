import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: true,
    }),
  logout: async () => {
    try {
      await axios.post("/api/auth/logout", {}, { withCredentials: true });
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
  fetchUser: async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/users/register/",
        { withCredentials: true },
      );
      if (response.data.user) {
        set({ user: response.data.user, isAuthenticated: true });
      } else {
        set({ user: null, isAuthenticated: false });
      }
    } catch (error) {
      console.error("Fetch user failed:", error);
      set({ user: null, isAuthenticated: false });
    }
  },
}));

export default useAuthStore;
