import { useState } from 'react';
import { sendContactMessage } from '../contactService';

const useContact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendContact = async (data: { name: string; email: string; message: string }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await sendContactMessage(data);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Xatolik yuz berdi');
    } finally {
      setLoading(false);
    }
  };

  return { sendContact, loading, error, success };
};

export default useContact;
