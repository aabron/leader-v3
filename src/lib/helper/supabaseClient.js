import { createClient } from '@supabase/supabase-js'
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL, 
    process.env.REACT_APP_SUPABASE_ANON_KEY
);

export const getUserName = async async => {
    const {user, session, error} = await supabase.auth.getUser();
    const firstName = await supabase.from('users').select('raw_user_metadata -> first_name').eq('id', user.id);
}

export function ConfirmEmail() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const session = params.get('session');
        if(session) {
            supabase.auth.setSession(session);

            window.location.href = "/Leads";
            toast.success("Email confirmed!", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        }
    }, []);

    return (
        <div>
            Confirming your email...
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}
