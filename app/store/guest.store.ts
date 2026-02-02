import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { funcGetWeddingGuest, funcSetPassesConfirm } from './guest.functions';
import { dropConfettiheavy, getFormattedDate } from '@app/utils/confetti';

export interface WeddingGuestInfo {
  id: string | null;
  family: string | null;
  representant: string | null;
  passavailable: number | 0;
  passconfirmed: number | 0;
  comments: string | null;
  date: string | null;
  dateconfirmation: string | null;
  invitation_from: string | null; // Indica quién envía la invitación (puede ser la familia o Luz Flores)
}

export interface WeddingGuestStore {
  isWeddingGuest: string | null;
  loading: boolean;
  weddingGuest: WeddingGuestInfo;
  getWeddingGuest: (id: string) => Promise<void>;
  setConfirmPasses: (weddingGuest: any) => Promise<void>;
}

export const useWeddingGuestStore = create<WeddingGuestStore>()(
  devtools(
    // Persist state after update tab
    persist(
      (set) => ({
        isWeddingGuest: null,
        loading: false,
        weddingGuest: {
          id: null,
          family: null,
          representant: null,
          passavailable: 0,
          passconfirmed: 0,
          comments: null,
          date: null,
          dateconfirmation: null,
          invitation_from: null, // Asumiendo que las invitaciones solo pueden venir de la novia o del novio
        },

        // Actions
        // Get guest information
        getWeddingGuest: async (id) => {
          const weddingGuest = await funcGetWeddingGuest(id);
          set({ weddingGuest });
        },

        // Set guest confirmation
        setConfirmPasses: async (weddingGuest) => {
          set({ loading: true });
          const resp = await funcSetPassesConfirm(weddingGuest);
          set({ loading: false });

          if (resp?.success) {
            const today = new Date();
            const dateconfirmation = getFormattedDate(today);
            const weddingGuestNew = { ...weddingGuest, dateconfirmation };
            set({ weddingGuest: weddingGuestNew });
            weddingGuest?.passconfirmed > 0 && dropConfettiheavy();
          }
        },
      }),
      {
        name: 'weddingGuestStorage', // Nombre de la clave bajo la cual se almacenará el estado en el localStorage
        partialize: (state) => ({ weddingGuest: state.weddingGuest }), // Seleccionar partes del estado para persistir
      }
    ),
    { name: 'WeddingGuest' }
  )
);
