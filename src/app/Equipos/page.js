import { createClient } from '@/utils/supabase/server';

export default async function Equipos() {
  const supabase = await createClient();
  const { data: equipos } = await supabase.from("equipos").select();
  console.log(equipos)
  return <pre>{JSON.stringify(equipos, null, 2)}</pre>
}