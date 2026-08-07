import { useEffect, useMemo, type FC } from 'react';
import { Link } from 'react-router';
import { initDropdowns } from 'flowbite';
import { all_routes } from '../../../../routes/all_routes';
import PredefinedDatePicker from '../../../../components/common-date-range-picker/PredefinedDatePicker';
import CollapseIcons from '../../../../components/collapse-icons/collapseIcons';
import CommonFooter from '../../../../components/common-footer/commonFooter';
import EvmChart from '../../../../charts/evmChart';
import evmCsvData from '../../../../../imported_data/evm.csv?raw';
import ChartVelocity from "../../../../charts/chartVelocity";
import ChartBurnProxy from "../../../../charts/chartBurnProxy";
import ChartWorkloadProxy from "../../../../charts/ChartWorkloadProxy";
import { parseCsv, type Row } from "../../../../charts/parseCsv";
import sprintSummaryCsv from "../../../../../imported_data/sprint_summary.csv?raw"; // adjust this path if needed
import burnProxyCsv from "../../../../../imported_data/burn_proxy.csv?raw";
import perPersonCsv from "../../../../../imported_data/per_person.csv?raw";
import MarkdownBlock from '../../../../components/markdown/MarkdownBlock';
import evmMarkdown from '../../../../charts/evm.md?raw';
import flowChartMarkdown from '../../../../charts/flowchart.md?raw';
import EvmStack, { type EvmPoint } from '../../../../charts/evmStack';

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

  const sprintSummaryTable = parseCsv(sprintSummaryCsv);
  const burnProxyTable = parseCsv(burnProxyCsv);
  const perPersonTable = parseCsv(perPersonCsv);

  const sprintSummary = (sprintSummaryTable.rows as Row[]) ?? [];
  const burnProxy = (burnProxyTable.rows as Row[]) ?? [];
  const perPerson = (perPersonTable.rows as Row[]) ?? [];

  const evmData = useMemo(() => parseEvmData(evmCsvData), []);

  const sprintIds = Array.from(
    new Set(
      sprintSummary
        .map((row) => String(row.sprint_id ?? "").trim())
        .filter(Boolean)
    )
  ).slice(0, 6);

  return (
    <div className="page-wrapper relative pt-[56px] ml-[240px]">
      <div className="content p-5 pb-0">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
          <div>
            <h4>Software Dashboard</h4>
            <p className="text-sm text-gray-500">Your new home landing page</p>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            <div className="relative">
              <PredefinedDatePicker />
            </div>
            <CollapseIcons />
          </div>
        </div>

        <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
          <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
            <h6 className="m-0">Earned Value Management</h6>
            <Link to={all_routes.leadsDashboard} className="text-sm text-primary hover:underline">
              Earned Value Management Dashboard
            </Link>
          </div>
          <div className="p-4">
            <EvmChart csvData={evmCsvData} />
          </div>
          <div className="border-t border-borderColor p-4">
            <MarkdownBlock content={evmMarkdown} />
          </div>
          <div className="border-t border-borderColor p-4">
            <MarkdownBlock content={flowChartMarkdown} />
          </div>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full h-full">
            <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
              <h6 className="m-0">Sprint Summary</h6>
            </div>
            <div className="p-4">
              <ChartVelocity sprintIds={sprintIds} sprint_summary={sprintSummary} />
            </div>
          </div>

          <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full h-full">
            <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
              <h6 className="m-0">Burn Proxy</h6>
            </div>
            <div className="p-4">
              <ChartBurnProxy sprintIds={sprintIds} burn_proxy={burnProxy} />
            </div>
           <div>
             <EvmStack data={evmData} />
          </div>
          </div>
        </div>

        <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
          <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
            <h6 className="m-0">Workload Proxy</h6>
          </div>
          <div className="p-4">
            <ChartWorkloadProxy sprintIds={sprintIds} per_person={perPerson} />
          </div>
        </div> 


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-borderColor rounded-lg shadow-sm p-4">
            <h6 className="mb-3">Overview</h6>
            <p className="text-sm text-gray-600">
              This page is now your landing page and uses the CSV-driven chart.
            </p>
          </div>

          <div className="bg-white border border-borderColor rounded-lg shadow-sm p-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <Link to={all_routes.leadsDashboard} className="text-primary hover:underline">
                  Leads Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <CommonFooter />
    </div>
  );
};

export default SoftwareDashboard;

export const routes = [
  {
    path: '/',
    element: <SoftwareDashboard />,
  },
  {
    path: '/dashboard/software-dashboard',
    element: <SoftwareDashboard />,
  },
];