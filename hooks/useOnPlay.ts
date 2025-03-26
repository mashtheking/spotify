import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Song } from '@/types';
import { usePlayer } from './usePlayer';
import { useAuthModal } from './useAuthModal';
import { useUser } from './useUser';
import { useSubscribeModal } from './useSubscribeModal';
import { useGetSongById} from './useGetSongById';

export const useOnPlay = (songs: Song[]) => {
  const supabaseClient = useSupabaseClient();
  const subscribeModal = useSubscribeModal();
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user, subscription } = useUser();

  const usePlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }





  const { data: songData } = supabaseClient.storage.from('songs').getPublicUrl(song.song_path);

  return songData.publicUrl;

    
    if (!subscription && infor.song.package != 'free') {
      return subscribeModal.onOpen();
    }
    
    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };
  return usePlay;
};
