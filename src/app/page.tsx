import Calendar from "@/components/Calendar";
import Logs from "@/components/Logs";
import Navbar from "@/components/Navbar";
import { NewLog } from "@/components/Newlog";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="p-5 space-y-10">
      <Navbar />
      <NewLog />
      <Calendar />
      <Logs />
    </div>
  )
}
