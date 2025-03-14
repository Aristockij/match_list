"use client";

import s from "./index.module.scss";
import { useGetMatch } from "@/hooks/useGetMatch";

const Index = () => {
  const { isError, isFetching, refetch } = useGetMatch();

  return (
    <header className={`${s.header} container`}>
      <div>
        <img src='/assets/header_icon.svg' alt='header_icon' />
      </div>
      <div className={s.right}>
        {isError && (
          <div className={s.error}>
            <img src='/assets/alert.svg' alt='alert' />
            <span>Ошибка: не удалось загрузить информацию</span>
          </div>
        )}

        <button className={s.refresh} onClick={() => refetch()}>
          <span>Обновить</span>
          <img
            className={isFetching ? s.loading : ""}
            src='/assets/refresh.svg'
            alt='refresh'
          />
        </button>
      </div>
    </header>
  );
};
export default Index;
