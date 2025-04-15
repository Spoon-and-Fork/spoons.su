'use client'

import '@/app/css/mainpage.css'
import withAuth from "@/hoc/withAuth";
import NavigationBar from '@/app/nav/navbar';



function Dashboard() {
  return (
    <>
      <nav>{NavigationBar()}</nav>
    </>
  );
}

export default withAuth(Dashboard);
