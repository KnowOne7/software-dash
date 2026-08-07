import { useEffect, useMemo, type FC } from 'react';
import { initDropdowns } from 'flowbite';

import CollapseIcons from '../../../../components/collapse-icons/collapseIcons';
import CommonFooter from '../../../../components/common-footer/commonFooter';
import EvmStack, { type EvmPoint } from '../../../../charts/evmStack_selfParse';
import { parseCsv } from '../../../../charts/parseCsv';

import evmCsvData from '../../../../../imported_data/evm.csv?raw';

const normalizeHeader = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '');

const getCell = (row: Record<string, string>, candidates: string[]) => {
  for (const candidate of candidates) {
    const header = Object.keys(row).find(
      (key) => normalizeHeader(key) === normalizeHeader(candidate)
    );
    if (header) return row[header];
  }
  return '';
};

const parseEvmData = (csvText: string): EvmPoint[] => {
  const { rows } = parseCsv(csvText);

  return rows.map((row) => ({
    project:
      getCell(row, ['project', 'name', 'projectname', 'project_name']) || 'Project',
    plannedDays: Number(
      getCell(row, ['planned_days', 'planned', 'planneddays', 'planned_days_used']) || 0
    ),
    earnedDays: Number(
      getCell(row, ['earned_days', 'earned', 'earneddays']) || 0
    ),
    actualCostDays: Number(
      getCell(row, ['actual_cost_days', 'actual_cost', 'actualcost', 'actualcostdays']) || 0
    ),
  }));
};

const SoftwareDashboard: FC = () => {
  useEffect(() => {
    initDropdowns();
  }, []);

  const evmData = useMemo(() => parseEvmData(evmCsvData), []);

  return (
    <div className="page-wrapper relative pt-[56px] ml-[240px]">
      <div className="content p-5 pb-0">
        <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
          <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
            <h6 className="m-0">Earned Value Management</h6>
          </div>
          <div className="p-4">
            <EvmStack data={evmData} />
          </div>
        </div>
      </div>

      <CommonFooter />
    </div>
  );
};

export default SoftwareDashboard;