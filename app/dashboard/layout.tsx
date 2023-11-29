import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-screen max-w-screen-2xl flex-col md:flex-row  ">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6  md:p-12">{children}</div>
    </div>
  );
}
