//
import '@/app/css/Login.css'
import { cookies } from 'next/headers';
import Docs from './components/docs';
import { redirect } from 'next/navigation';

export default async function PanelPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('access_token')?.value;
  const tokenExpiresAt = cookieStore.get('token_expires_at')?.value;

  const isExpired = tokenExpiresAt ? new Date(tokenExpiresAt) <= new Date() : true;
  if (!accessToken || isExpired) {
    redirect('/auth');
  }

  return (
    <>
      <Docs />
    </>
  );
}
