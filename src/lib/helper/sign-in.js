import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) {
      alert('Error with Login:' + error.message);
    } else {
      // once login is successful, redirect to dashboard
      router.push('/Leads');
    }
  }
}
