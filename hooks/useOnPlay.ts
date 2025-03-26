import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { Song } from '@/types';
import { usePlayer } from './usePlayer';
import { useAuthModal } from './useAuthModal';
import { useUser } from './useUser';
import { useSubscribeModal } from './useSubscribeModal';
import { useGetSongById} from './useGetSongById';

export const useOnPlay = (songs: Song[]) => {
  const supabaseClient = useSupabaseClient();
        const [songD, setSong] = useState<Song>([]) ;



    const fetchSong = async (id: string) => {


      const { data, error } = await supabaseClient.from('songs').select('*').eq('id', id).single();

      if (error) {
        
      }
      setSong(data as Song);
     
    };

    



  
  const subscribeModal = useSubscribeModal();
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user, subscription } = useUser();
  const usePlay = (id: string) => {
    fetchSong(id);
    if (!user) {
      return authModal.onOpen();
    }

    
    if (!subscription && songD.package != 'free') {
      return subscribeModal.onOpen();
    }
    
    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };
  return usePlay;
};
