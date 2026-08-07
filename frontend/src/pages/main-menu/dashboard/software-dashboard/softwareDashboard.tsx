import { useEffect, type FC } from 'react';
import { Link } from 'react-router';
import { initDropdowns } from 'flowbite';
import { all_routes } from '../../../../routes/all_routes';
import PredefinedDatePicker from '../../../../components/common-date-range-picker/PredefinedDatePicker';
import CollapseIcons from '../../../../components/collapse-icons/collapseIcons';
import CommonFooter from '../../../../components/common-footer/commonFooter';
import EvmChart from '../../../../charts/evmChart';
import evmCsvData from '../leads-dashboard/charts/evm.csv?raw';

const SoftwareDashboard: FC = () => {
  useEffect(() => {
    initDropdowns();
  }, []);

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
              Open Leads Dashboard
            </Link>
          </div>
          <div className="p-4">
            <EvmChart csvData={evmCsvData} />
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