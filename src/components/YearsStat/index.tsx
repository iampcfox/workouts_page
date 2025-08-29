import { useMemo } from 'react';
import YearStat from '@/components/YearStat';
import useActivities from '@/hooks/useActivities';
import { INFO_MESSAGE } from '@/utils/const';

const YearsStat = ({
  year,
  onClick,
  onClickTypeInYear,
}: {
  year: string;
  onClick: (_year: string) => void;
  onClickTypeInYear: (_year: string, _type: string) => void;
}) => {
  const { years } = useActivities();

  // Memoize the years array calculation
  const yearsArrayUpdate = useMemo(() => {
    // make sure the year click on front
    let updatedYears = years.slice();
    updatedYears.push('Total');
    updatedYears = updatedYears.filter((x) => x !== year);
    updatedYears.unshift(year);
    return updatedYears;
  }, [years, year]);

  const infoMessage = useMemo(() => {
    return INFO_MESSAGE(years.length, year);
  }, [years.length, year]);

  // for short solution need to refactor
  return (
    <div className="w-full pb-16 pr-12 lg:w-full lg:pr-16">
      <section className="pb-0">
        <p className="leading-relaxed">
          {infoMessage}
          <br />

          <br />
          <div>
            “
            就物理观点来看，大家都跑在同一条赛道上，然而，每个人到达的境界却各有不同，借由跑步找到属于自己的终点。
            ”
          </div>
          <br />
          <div>
            “ 跑者们总是不断在思考、迷惘、犯错， 然后再重新来过。 ”
            <br />
            <br />
            <div class="text-right">——「强风吹拂」</div>
          </div>
        </p>
      </section>
      <hr />
      {yearsArrayUpdate.map((yearItem) => (
        <YearStat
          key={yearItem}
          year={yearItem}
          onClick={onClick}
          onClickTypeInYear={onClickTypeInYear}
        />
      ))}
    </div>
  );
};

export default YearsStat;
