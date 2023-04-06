import "./styles/global.css";
import "./lib/dayjs";
import { Header } from "./components/Header";
import { api } from "./lib/axios";
import { SummaryTable } from "./components/SummaryTable";

navigator.serviceWorker.register("/sw.js").then(async serviceWorker => {
  let subscription = await serviceWorker.pushManager.getSubscription();

  if (!subscription) {
    const publicKeyResponse = await api.get("/push/public-key");

    subscription = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: publicKeyResponse.data.publicKey,
    });
  }

  await api.post("/push/register", {
    subscription,
  });

  await api.post("/push/send", {
    subscription,
  });
});

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  );
}
