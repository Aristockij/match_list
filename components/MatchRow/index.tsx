import { FC } from "react";
import s from "./index.module.scss";
import { MatchRowTypeProps } from "@/types/MatchRowType";

const index: FC<MatchRowTypeProps> = (props) => {
  const StatusBtn = () => {
    return (
      <>
        {props.status === "Finished" && (
          <div className={`${s.status} ${s.finish}`}>Finished</div>
        )}
        {props.status === "Ongoing" && (
          <div className={`${s.status} ${s.live}`}>Live</div>
        )}
        {props.status === "Scheduled" && (
          <div className={`${s.status} ${s.scheduled}`}>Match preparing</div>
        )}
      </>
    );
  };

  return (
    <div className={s.row}>
      <div className={s.team}>
        <img src='/assets/team.svg' alt='team_img' />
        <span>{props.team_1}</span>
      </div>
      <div className={s.score__wrap}>
        <div className={s.score}>
          <span>{props.score_1}</span>
          <span>:</span>
          <span>{props.score_2}</span>
        </div>
        <StatusBtn />
      </div>
      <div className={s.team}>
        <span> {props.team_2}</span>
        <img src='/assets/team.svg' alt='team_img' />
      </div>
    </div>
  );
};
export default index;
