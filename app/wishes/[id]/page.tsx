import WishExperience from '@/components/WishExperience'
import { createReadClient } from '@/lib/supabaseRead'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function WishDetailPage({ params }: { params: { id: string } }) {
  const supabase = createReadClient()
  const { data, error } = await supabase
    .from('wishes')
    .select('id,name,message,image_url,created_at')
    .eq('id', params.id)
    .maybeSingle()
  if (error) throw error
  if (!data) return notFound()
  return <WishExperience wish={data as any} />
}