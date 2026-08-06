import { Link, useLocation } from "react-router";
import { all_routes } from "../../../routes/all_routes";


const SettingsTopbar = () => {
  const location = useLocation();

  // Helper to check if current path matches the route
  const isActive = (route: string) => location.pathname === route;

  return (
    <div className="bg-white rounded">
      <div className="px-2">
        <ul className="flex flex-wrap gap-y-3 items-center border-b border-borderColor mb-7">
          <li className="nav-item me-3">
            <Link
              to={all_routes.profile}
              className={`inline-block py-2 px-4  font-medium hover:text-primary${
                isActive(all_routes.profile) ||
                isActive(all_routes.security) ||
                isActive(all_routes.notification) ||
                isActive(all_routes.connectedApps)
                  ? " text-primary  border-b-2 border-primary"
                  : ""
              }`}
            >
              <i className="ti ti-settings-cog me-2" />
              General Settings
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link
              to={all_routes.companySettings}
              className={`inline-block py-2 px-4  font-medium hover:text-primary${
                isActive(all_routes.companySettings) ||
                isActive(all_routes.localization) ||
                isActive(all_routes.prefixes) ||
                isActive(all_routes.preference) ||
                isActive(all_routes.appearance) ||
                isActive(all_routes.languageWeb)
                  ? "  text-primary  border-b-2 border-primary"
                  : ""
              }`}
            >
              <i className="ti ti-world-cog me-2" />
              Website Settings
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link
              to={all_routes.invoiceSettings}
              className={`inline-block py-2 px-4  font-medium hover:text-primary${
                isActive(all_routes.invoiceSettings) || isActive(all_routes.printers)  || isActive(all_routes.customFields) ? "  text-primary  border-b-2 border-primary" : ""
              }`}
            >
              <i className="ti ti-apps me-2" />
              App Settings
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link
              to={all_routes.emailSettings}
              className={`inline-block py-2 px-4  font-medium hover:text-primary${
                isActive(all_routes.emailSettings) || isActive(all_routes.smsGateways) || isActive(all_routes.gdprCookies) ? "  text-primary  border-b-2 border-primary" : ""
              }`}
            >
              <i className="ti ti-device-laptop me-2" />
              System Settings
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link
              to={all_routes.paymentGateways}
              className={`inline-block py-2 px-4  font-medium hover:text-primary${
                isActive(all_routes.paymentGateways) || isActive(all_routes.bankAccount) || isActive(all_routes.taxRates) || isActive(all_routes.currencies) ? "  text-primary  border-b-2 border-primary" : ""
              }`}
            >
              <i className="ti ti-moneybag me-2" />
              Financial Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={all_routes.sitemap}
              className={`inline-block py-2 px-4  font-medium hover:text-primary${
                isActive(all_routes.sitemap) || isActive(all_routes.clearCache) || isActive(all_routes.storage) || isActive(all_routes.cronjob) || isActive(all_routes.banIpAddrress)  || isActive(all_routes.systemBackup)  || isActive(all_routes.databaseBackup) || isActive(all_routes.systemUpdate) ? "  text-primary  border-b-2 border-primary" : ""
              }`}
            >
              <i className="ti ti-flag-cog me-2" />
              Other Settings
            </Link>
          </li>
        </ul>
      </div>{" "}
      {/* end card body */}
    </div>
  );
};

export default SettingsTopbar;
