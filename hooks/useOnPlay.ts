import { Song } from '@/types';
import { usePlayer } from './usePlayer';
import { useAuthModal } from './useAuthModal';
import { useUser } from './useUser';
import { useSubscribeModal } from './useSubscribeModal';
import { useGetSongById} from './useGetSongById';

export const useOnPlay = (songs: Song[]) => {
  const subscribeModal = useSubscribeModal();
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user, subscription } = useUser();

  const usePlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }
const infor = useGetSongById(id);
    if (!subscription && infor.package != 'free') {
      return subscribeModal.onOpen();
    }
    
    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };
  return usePlay;
};
