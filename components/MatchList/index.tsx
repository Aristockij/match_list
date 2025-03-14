"use client";

import { useGetMatch } from "@/hooks/useGetMatch";
import MatchRow from "@/components/MatchRow";
import { MatchRowType } from "@/types/MatchRowType";
import s from "./index.module.scss";

const Index = () => {
  const { isFetching, data } = useGetMatch();

  return (
    <main>
      <section className={"container"}>
        {data &&
          data?.data.data.matches.map((el: MatchRowType, index: number) => (
            <MatchRow
              key={index}
              team_1={el.homeTeam.name}
              score_1={el.homeScore}
              team_2={el.awayTeam.name}
              score_2={el.awayScore}
              status={el.status}
            />
          ))}
        {isFetching && (
          <div className={s.loading}>
            <img src='/assets/refresh.svg' alt='fetching' />
          </div>
        )}
      </section>
    </main>
  );
};

export default Index;
