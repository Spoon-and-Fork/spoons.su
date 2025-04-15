'use client'

import withAdmin from "@/hoc/withAdmin";
import AdminPanel from "@/app/components/AdminPanel";

function AdminPage() {
  return <><AdminPanel /></>;
}

export default withAdmin(AdminPage);
