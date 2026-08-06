import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import "../../../style/icon/weather/weathericons.css"
import { all_routes } from "../../../routes/all_routes"

const IconWeatherIcon = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
      <div className="content p-5 pb-0">
        {/* Page Header */}
        <div className="mb-7">
          <h4 className="mb-1 text-xl font-bold flex items-center">
            Weather Icon
          </h4>
          <nav aria-label="breadcrumb">
            <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <Link to={all_routes.dealsDashboard} className="hover:underline text-gray-700">
                  Home
                </Link>
                <span>
                  <i className="ti ti-chevron-right" />
                </span>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:underline text-gray-700"
                >
                  Icons
                </Link>
                <span>
                  <i className="ti ti-chevron-right" />
                </span>
              </li>
              <li className="text-dark font-medium" aria-current="page">
                Weather Icon
              </li>
            </ol>
          </nav>
        </div>
        {/* End Page Header */}
        <div className="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <div className="card-title">Weather Icon</div>
          </div>
          <div className="card-body p-5">
            <div className="icons-items">
              <ul className="icons-list flex flex-wrap">
                <li>
                  <i
                    className="wi wi-day-cloudy-high"
                    data-tooltip-target="wi-day-cloudy-high"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-cloudy-high"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-cloudy-high
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-moonrise"
                    data-tooltip-target="wi-moonrise"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-moonrise"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-moonrise
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-na"
                    data-tooltip-target="wi-na"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-na"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-na
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-volcano"
                    data-tooltip-target="wi-volcano"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-volcano"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-volcano
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-light-wind"
                    data-tooltip-target="wi-day-light-wind"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-light-wind"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-light-wind
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-moonset"
                    data-tooltip-target="wi-moonset"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-moonset"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-moonset
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-flood"
                    data-tooltip-target="wi-flood"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-flood"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-flood
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-train"
                    data-tooltip-target="wi-train"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-train"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-train
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-sleet"
                    data-tooltip-target="wi-day-sleet"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-sleet"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-sleet
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-sleet"
                    data-tooltip-target="wi-night-sleet"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-sleet"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-sleet
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-sandstorm"
                    data-tooltip-target="wi-sandstorm"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-sandstorm"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-sandstorm
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-small-craft-advisory"
                    data-tooltip-target="wi-small-craft-advisory"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-small-craft-advisory"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-small-craft-advisory
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-haze"
                    data-tooltip-target="wi-day-haze"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-haze"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-haze
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-sleet"
                    data-tooltip-target="wi-night-alt-sleet"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-sleet"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-sleet
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-tsunami"
                    data-tooltip-target="wi-tsunami"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-tsunami"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-tsunami
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-gale-warning"
                    data-tooltip-target="wi-gale-warning"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-gale-warning"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-gale-warning
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-cloudy-high"
                    data-tooltip-target="wi-night-cloudy-high"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-cloudy-high"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-cloudy-high
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-raindrop"
                    data-tooltip-target="wi-raindrop"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-raindrop"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-raindrop
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-earthquake"
                    data-tooltip-target="wi-earthquake"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-earthquake"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-earthquake
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-storm-warning"
                    data-tooltip-target="wi-storm-warning"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-storm-warning"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-storm-warning
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-partly-cloudy"
                    data-tooltip-target="wi-night-alt-partly-cloudy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-partly-cloudy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-partly-cloudy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-barometer"
                    data-tooltip-target="wi-barometer"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-barometer"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-barometer
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-fire"
                    data-tooltip-target="wi-fire"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-fire"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-fire
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-hurricane-warning"
                    data-tooltip-target="wi-hurricane-warning"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-hurricane-warning"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-hurricane-warning
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-sleet"
                    data-tooltip-target="wi-sleet"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-sleet"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-sleet
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-humidity"
                    data-tooltip-target="wi-humidity"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-humidity"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-humidity
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-sunny"
                    data-tooltip-target="wi-day-sunny"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-sunny"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-sunny
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-cloudy"
                    data-tooltip-target="wi-day-cloudy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-cloudy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-cloudy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-cloudy-gusts"
                    data-tooltip-target="wi-day-cloudy-gusts"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-cloudy-gusts"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-cloudy-gusts
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-cloudy-windy"
                    data-tooltip-target="wi-day-cloudy-windy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-cloudy-windy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-cloudy-windy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-fog"
                    data-tooltip-target="wi-day-fog"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-fog"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-fog
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-hail"
                    data-tooltip-target="wi-day-hail"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-hail"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-hail
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-haze"
                    data-tooltip-target="wi-day-haze2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-haze2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-haze
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-lightning"
                    data-tooltip-target="wi-day-lightning"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-lightning"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-lightning
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-rain"
                    data-tooltip-target="wi-day-rain"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-rain"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-rain
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-rain-mix"
                    data-tooltip-target="wi-day-rain-mix"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-rain-mix"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-rain-mix
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-rain-wind"
                    data-tooltip-target="wi-day-rain-wind"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-rain-wind"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-rain-wind
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-showers"
                    data-tooltip-target="wi-day-showers"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-showers"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-showers
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-sleet"
                    data-tooltip-target="wi-day-sleet2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-sleet2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-sleet
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-sleet-storm"
                    data-tooltip-target="wi-day-sleet-storm"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-sleet-storm"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-sleet-storm
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-snow"
                    data-tooltip-target="wi-day-snow"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-snow"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-snow
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-snow-thunderstorm"
                    data-tooltip-target="wi-day-snow-thunderstorm"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-snow-thunderstorm"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-snow-thunderstorm
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-snow-wind"
                    data-tooltip-target="wi-day-snow-wind"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-snow-wind"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-snow-wind
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-sprinkle"
                    data-tooltip-target="wi-day-sprinkle"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-sprinkle"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-sprinkle
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-storm-showers"
                    data-tooltip-target="wi-day-storm-showers"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-storm-showers"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-storm-showers
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-sunny-overcast"
                    data-tooltip-target="wi-day-sunny-overcast"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-sunny-overcast"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-sunny-overcast
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-thunderstorm"
                    data-tooltip-target="wi-day-thunderstorm"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-thunderstorm"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-thunderstorm
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-windy"
                    data-tooltip-target="wi-day-windy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-windy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-windy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-solar-eclipse"
                    data-tooltip-target="wi-solar-eclipse"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-solar-eclipse"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-solar-eclipse
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-hot"
                    data-tooltip-target="wi-hot"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-hot"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-hot
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-cloudy-high"
                    data-tooltip-target="wi-day-cloudy-high2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-cloudy-high2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-cloudy-high
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-day-light-wind"
                    data-tooltip-target="wi-day-light-wind2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-day-light-wind2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-day-light-wind
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-clear"
                    data-tooltip-target="wi-night-clear"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-clear"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-clear
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-cloudy"
                    data-tooltip-target="wi-night-alt-cloudy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-cloudy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-cloudy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-cloudy-gusts"
                    data-tooltip-target="wi-night-alt-cloudy-gusts"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-cloudy-gusts"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-cloudy-gusts
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-cloudy-windy"
                    data-tooltip-target="wi-night-alt-cloudy-windy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-cloudy-windy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-cloudy-windy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-hail"
                    data-tooltip-target="wi-night-alt-hail"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-hail"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-hail
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-lightning"
                    data-tooltip-target="wi-night-alt-lightning"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-lightning"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-lightning
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-rain"
                    data-tooltip-target="wi-night-alt-rain"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-rain"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-rain
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-rain-mix"
                    data-tooltip-target="wi-night-alt-rain-mix"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-rain-mix"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-rain-mix
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-rain-wind"
                    data-tooltip-target="wi-night-alt-rain-wind"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-rain-wind"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-rain-wind
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-showers"
                    data-tooltip-target="wi-night-alt-showers"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-showers"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-showers
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-sleet"
                    data-tooltip-target="wi-night-alt-sleet2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-sleet2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-sleet
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-sleet-storm"
                    data-tooltip-target="wi-night-alt-sleet-storm"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-sleet-storm"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-sleet-storm
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-snow"
                    data-tooltip-target="wi-night-alt-snow"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-snow"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-snow
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-snow-thunderstorm"
                    data-tooltip-target="wi-night-alt-snow-thunderstorm"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-snow-thunderstorm"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-snow-thunderstorm
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-snow-wind"
                    data-tooltip-target="wi-night-alt-snow-wind"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-snow-wind"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-snow-wind
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-sprinkle"
                    data-tooltip-target="wi-night-alt-sprinkle"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-sprinkle"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-sprinkle
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-storm-showers"
                    data-tooltip-target="wi-night-alt-storm-showers"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-storm-showers"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-storm-showers
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-thunderstorm"
                    data-tooltip-target="wi-night-alt-thunderstorm"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-thunderstorm"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-thunderstorm
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-cloudy"
                    data-tooltip-target="wi-night-cloudy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-cloudy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-cloudy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-cloudy-gusts"
                    data-tooltip-target="wi-night-cloudy-gusts"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-cloudy-gusts"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-cloudy-gusts
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-cloudy-windy"
                    data-tooltip-target="wi-night-cloudy-windy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-cloudy-windy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-cloudy-windy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-fog"
                    data-tooltip-target="wi-night-fog"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-fog"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-fog
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-hail"
                    data-tooltip-target="wi-night-hail"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-hail"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-hail
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-lightning"
                    data-tooltip-target="wi-night-lightning"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-lightning"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-lightning
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-partly-cloudy"
                    data-tooltip-target="wi-night-partly-cloudy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-partly-cloudy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-partly-cloudy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-rain"
                    data-tooltip-target="wi-night-rain"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-rain"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-rain
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-rain-mix"
                    data-tooltip-target="wi-night-rain-mix"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-rain-mix"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-rain-mix
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-rain-wind"
                    data-tooltip-target="wi-night-rain-wind"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-rain-wind"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-rain-wind
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-showers"
                    data-tooltip-target="wi-night-showers"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-showers"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-showers
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-sleet"
                    data-tooltip-target="wi-night-sleet2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-sleet2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-sleet
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-sleet-storm"
                    data-tooltip-target="wi-night-sleet-storm"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-sleet-storm"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-sleet-storm
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-snow"
                    data-tooltip-target="wi-night-snow"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-snow"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-snow
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-snow-thunderstorm"
                    data-tooltip-target="wi-night-snow-thunderstorm"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-snow-thunderstorm"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-snow-thunderstorm
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-snow-wind"
                    data-tooltip-target="wi-night-snow-wind"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-snow-wind"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-snow-wind
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-sprinkle"
                    data-tooltip-target="wi-night-sprinkle"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-sprinkle"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-sprinkle
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-storm-showers"
                    data-tooltip-target="wi-night-storm-showers"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-storm-showers"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-storm-showers
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-thunderstorm"
                    data-tooltip-target="wi-night-thunderstorm"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-thunderstorm"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-thunderstorm
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-lunar-eclipse"
                    data-tooltip-target="wi-lunar-eclipse"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-lunar-eclipse"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-lunar-eclipse
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-stars"
                    data-tooltip-target="wi-stars"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-stars"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-stars
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-storm-showers"
                    data-tooltip-target="wi-storm-showers"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-storm-showers"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-storm-showers
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-cloudy-high"
                    data-tooltip-target="wi-night-alt-cloudy-high"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-cloudy-high"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-cloudy-high
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-cloudy-high"
                    data-tooltip-target="wi-night-cloudy-high"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-cloudy-high"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-cloudy-high
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-night-alt-partly-cloudy"
                    data-tooltip-target="wi-night-alt-partly-cloudy2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-night-alt-partly-cloudy2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-night-alt-partly-cloudy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-cloud"
                    data-tooltip-target="wi-cloud"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-cloud"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-cloud
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-cloudy"
                    data-tooltip-target="wi-cloudy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-cloudy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-cloudy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-cloudy-gusts"
                    data-tooltip-target="wi-cloudy-gusts"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-cloudy-gusts"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-cloudy-gusts
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-cloudy-windy"
                    data-tooltip-target="wi-cloudy-windy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-cloudy-windy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-cloudy-windy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-fog"
                    data-tooltip-target="wi-fog"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-fog"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-fog
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-hail"
                    data-tooltip-target="wi-hail"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-hail"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-hail
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-rain"
                    data-tooltip-target="wi-rain"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-rain"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-rain
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-rain-mix"
                    data-tooltip-target="wi-rain-mix"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-rain-mix"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-rain-mix
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-rain-wind"
                    data-tooltip-target="wi-rain-wind"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-rain-wind"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-rain-wind
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-showers"
                    data-tooltip-target="wi-showers"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-showers"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-showers
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-sleet"
                    data-tooltip-target="wi-sleet2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-sleet2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-sleet
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-snow"
                    data-tooltip-target="wi-snow"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-snow"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-snow
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-sprinkle"
                    data-tooltip-target="wi-sprinkle"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-sprinkle"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-sprinkle
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-storm-showers"
                    data-tooltip-target="wi-storm-showers"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-storm-showers"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-storm-showers
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-thunderstorm"
                    data-tooltip-target="wi-thunderstorm"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-thunderstorm"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-thunderstorm
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-snow-wind"
                    data-tooltip-target="wi-snow-wind"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-snow-wind"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-snow-wind
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-snow"
                    data-tooltip-target="wi-snow"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-snow"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-snow
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-smog"
                    data-tooltip-target="wi-smog"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-smog"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-smog
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-smoke"
                    data-tooltip-target="wi-smoke"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-smoke"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-smoke
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-lightning"
                    data-tooltip-target="wi-lightning"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-lightning"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-lightning
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-raindrops"
                    data-tooltip-target="wi-raindrops"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-raindrops"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-raindrops
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-raindrop"
                    data-tooltip-target="wi-raindrop"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-raindrop"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-raindrop
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-snowflake-cold"
                    data-tooltip-target="wi-snowflake-cold"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-snowflake-cold"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-snowflake-cold
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-windy"
                    data-tooltip-target="wi-windy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-windy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-windy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-strong-wind"
                    data-tooltip-target="wi-strong-wind"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-strong-wind"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-strong-wind
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-sandstorm"
                    data-tooltip-target="wi-sandstorm2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-sandstorm2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-sandstorm
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-earthquake"
                    data-tooltip-target="wi-earthquake"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-earthquake"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-earthquake
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-fire"
                    data-tooltip-target="wi-fire2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-fire2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-fire
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-flood"
                    data-tooltip-target="wi-flood2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-flood2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-flood
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-meteor"
                    data-tooltip-target="wi-meteor"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-meteor"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-meteor
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-tsunami"
                    data-tooltip-target="wi-tsunami2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-tsunami2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-tsunami
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-volcano"
                    data-tooltip-target="wi-volcano2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-volcano2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-volcano
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-hurricane"
                    data-tooltip-target="wi-hurricane"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-hurricane"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-hurricane
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-tornado"
                    data-tooltip-target="wi-tornado"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-tornado"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-tornado
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-small-craft-advisory"
                    data-tooltip-target="wi-small-craft-advisory2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-small-craft-advisory2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-small-craft-advisory
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-gale-warning"
                    data-tooltip-target="wi-gale-warning2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-gale-warning2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-gale-warning
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-storm-warning"
                    data-tooltip-target="wi-storm-warning2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-storm-warning2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-storm-warning
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-hurricane-warning"
                    data-tooltip-target="wi-hurricane-warning2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-hurricane-warning2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-hurricane-warning
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-wind-direction"
                    data-tooltip-target="wi-wind-direction"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-wind-direction"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-wind-direction
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-alien"
                    data-tooltip-target="wi-alien"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-alien"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-alien
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-celsius"
                    data-tooltip-target="wi-celsius"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-celsius"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-celsius
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-fahrenheit"
                    data-tooltip-target="wi-fahrenheit"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-fahrenheit"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-fahrenheit
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-degrees"
                    data-tooltip-target="wi-degrees"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-degrees"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-degrees
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-thermometer"
                    data-tooltip-target="wi-thermometer"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-thermometer"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-thermometer
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-thermometer-exterior"
                    data-tooltip-target="wi-thermometer-exterior"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-thermometer-exterior"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-thermometer-exterior
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-thermometer-internal"
                    data-tooltip-target="wi-thermometer-internal"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-thermometer-internal"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-thermometer-internal
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-cloud-down"
                    data-tooltip-target="wi-cloud-down"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-cloud-down"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-cloud-down
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-cloud-up"
                    data-tooltip-target="wi-cloud-up"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-cloud-up"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-cloud-up
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-cloud-refresh"
                    data-tooltip-target="wi-cloud-refresh"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-cloud-refresh"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-cloud-refresh
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-horizon"
                    data-tooltip-target="wi-horizon"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-horizon"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-horizon
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-horizon-alt"
                    data-tooltip-target="wi-horizon-alt"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-horizon-alt"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-horizon-alt
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-sunrise"
                    data-tooltip-target="wi-sunrise"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-sunrise"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-sunrise
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-sunset"
                    data-tooltip-target="wi-sunset"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-sunset"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-sunset
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-moonrise"
                    data-tooltip-target="wi-moonrise2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-moonrise2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-moonrise
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-moonset"
                    data-tooltip-target="wi-moonset2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-moonset2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-moonset
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-refresh"
                    data-tooltip-target="wi-refresh"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-refresh"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-refresh
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-refresh-alt"
                    data-tooltip-target="wi-refresh-alt"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-refresh-alt"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-refresh-alt
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-umbrella"
                    data-tooltip-target="wi-umbrella"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-umbrella"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-umbrella
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-barometer"
                    data-tooltip-target="wi-barometer2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-barometer2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-barometer
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-humidity"
                    data-tooltip-target="wi-humidity2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-humidity2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-humidity
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-na"
                    data-tooltip-target="wi-na2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-na2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-na
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="wi wi-train"
                    data-tooltip-target="wi-train2"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="wi-train2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    wi wi-train
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Start Footer */}
      <CommonFooter/>
      {/* End Footer */}
    </div>
    {/* /Page Wrapper */}
  </>
  
  )
}

export default IconWeatherIcon