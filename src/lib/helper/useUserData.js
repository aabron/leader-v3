import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { useSessionContext, useUser } from "@supabase/auth-helpers-react";

export default function useUserData() {
  const [userMetadata, setUserMetadata] = useState(null);
  const currentUser = useUser();
  

  useEffect(() => {
    const session = supabase.auth.getSession();

    // Fetch user metadata
    if (session) {
      supabase
        .from('users')
        .select('raw_user_meta_data->first_name')
        .eq('id', currentUser?.id)
        .then(({ data, error }) => {
          if (error) {
            console.log('Error fetching user metadata:', error.message);
          } else {
            setUserMetadata(data);
          }
        });
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {

        // Fetch user metadata when auth state changes
        if (session) {
          supabase
            .from('users')
            .select('raw_user_meta_data->first_name')
            .eq('id', currentUser?.id)
            .then(({ data, error }) => {
              if (error) {
                console.log('Error fetching user metadata:', error.message);
              } else {
                setUserMetadata(data);
              }
            });
        }
      }
    );
  }, []);

  return { currentUser, userMetadata };
}
