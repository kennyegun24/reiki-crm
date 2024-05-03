"use client";
import styles from "./page.module.css";
import DashboardSalesCards from "@/components/cards/DashboardSalesCards";
import SalesLines from "@/components/cards/dashboard/SalesLines";
import UsersCard from "@/components/cards/dashboard/UsersCard";

export default function Home() {
  const sales_card = Array.from({ length: 3 });
  return (
    <div className={styles.container}>
      <div className={styles.dashboard_sales_cards}>
        {sales_card.map((card, _) => (
          <DashboardSalesCards ind={_} />
        ))}
      </div>
      <div className={styles.metricCards}>
        <div className={styles.user_card_container}>
          <UsersCard />
        </div>
        <div className={styles.sales_ilnes_container}>
          <SalesLines />
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
