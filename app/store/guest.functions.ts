import { WeddingGuestInfo } from './guest.store';
import api from 'app/config/axiosConfig';

export const funcGetWeddingGuest = async (
  id: string
): Promise<WeddingGuestInfo | undefined> => {
  try {
    const { data } = await api.get<WeddingGuestInfo>(`/api/guests/${id}`);
    return data;
  } catch (error) {
    console.error('Error:', error);
    return undefined;
  }
};

export const funcSetPassesConfirm = async (
  payload: WeddingGuestInfo
): Promise<any> => {
  try {
    const { data } = await api.post<WeddingGuestInfo>(`/api/guests`, payload);
    return data;
  } catch (error) {
    console.error('Error:', error);
    return undefined;
  }
};
