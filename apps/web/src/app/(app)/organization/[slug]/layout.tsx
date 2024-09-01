import Header from '@/components/header'
import { Tabs } from '@/components/tabs'

interface OrganizationLayoutProps {
  children: React.ReactNode
}

export default async function OrganizationLayout({
  children,
}: OrganizationLayoutProps) {
  return (
    <div>
      <div className="pt-6">
        <Header />
        <Tabs />
      </div>

      <main className="mx-auto w-full max-w-[1200px] py-4">{children}</main>
    </div>
  )
}
