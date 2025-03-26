"use strict"
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Song } from '@/types';
import { usePlayer } from './usePlayer';
import { useAuthModal } from './useAuthModal';
import { useUser } from './useUser';
import { useSubscribeModal } from './useSubscribeModal';
import { useGetSongById} from './useGetSongById';
import { useState } from "react"

export const useOnPlay = (songs: Song[]) => {
  
  const supabaseClient = useSupabaseClient();

         const fetchSong = async (id: string) => {
     const { data, error } = await supabaseClient.from('songs').select('*').eq('id', id).single();

      if (error) {
        return
      }
    
     if (!user) {
      return authModal.onOpen();
    }
    if (!subscription && data.package=='free') {
      return subscribeModal.onOpen();
    }

       player.setId(id);
    player.setIds(songs.map((song) => song.id));
     }
  


  
  const subscribeModal = useSubscribeModal();
  const player = usePlayer();
  const authModal = useAuthModal();
  const { user, subscription } = useUser();
  const usePlay = (id: string) => {
fetchSong(id);
  };

  return usePlay;
};
