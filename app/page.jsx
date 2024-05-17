"use client";
import styles from "./page.module.css";
import DashboardSalesCards from "@/components/cards/DashboardSalesCards";
import SalesLines from "@/components/cards/dashboard/SalesLines";
import UsersCard from "@/components/cards/dashboard/UsersCard";
import useSWR from "swr";

export default function Home() {
  // const sales_card = Array.from({ length: 3 });
  const fetcher = async () => {
    const fetchData = await fetch("/api/statistics/dashboard");
    const data = await fetchData.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    "fetchDashboardSalesStats",
    fetcher,
    {
      refreshInterval: null,
      errorRetryInterval: 500,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      errorRetryCount: 1,
      revalidateOnMount: true,
    }
  );
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.dashboard_sales_cards}>
        {data?.dashboardSalesCards?.map((card, _) => (
          <DashboardSalesCards key={_} ind={_} data={card} />
        ))}
      </div>
      <div className={styles.metricCards}>
        <div className={styles.user_card_container}>
          <UsersCard />
        </div>
        <div className={styles.sales_ilnes_container}>
          <SalesLines total={data?.totalSales} />
        </div>
      </div>
    </div>
  );
}

// I an trying not to make this sound from personal pov, so yeah, it won't be perfect.
// Heard of the story 'Beauty and a Beast'?...
// I get the feeling that no matter who you end up with,
// no matter how handsome he may seem,
// it will still always remain 'Beauty and a Beast'
// Why? Hmmm... You are not only beautiful on the outside...
// You are also beautiful on the inside...
// and that is definitely something that not everyone
// will have the luxury of having in one's partner...
// Sometimes I look at
