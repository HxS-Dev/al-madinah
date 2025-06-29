'use client'
import React, { useEffect, useState } from 'react'
import Chart from './Chart'
import { sanityClient } from '../lib/sanity';
import { donationQuery } from '../lib/queries';

const defaultChartData = {
  chart1: {
    value: 2000000,
    total: 2100000,
    label: "£2.1m"
  },
  chart2: {
    value: 2100000,
    total: 2100000,
    label: "£2.1m"
  },
  chart3: {
    value: 100000,
    total: 2100000,
    label: "£0.00m"
  }
};

const DonationProgress = () => {
  const [chart, setChartData] = useState<any>(null);

  useEffect(() => {
    async function getData() {
      function formatAmount(amount: number): string {
        if (amount >= 1_000_000) {
          return `£${(amount / 1_000_000).toFixed(1)}m`;
        } else if (amount >= 1_000) {
          return `£${(amount / 1_000).toFixed(1)}k`;
        } else {
          return `£${amount}`;
        }
      }

      try {
        const data = await sanityClient.fetch(donationQuery);
        if (Array.isArray(data) && data.length > 0) {
          const donation = data[0];
          const total = donation.targetAmount || 0;
          const collected = donation.amountCollected || 0;
          const remaining = Math.max(total - collected, 0);

          setChartData({
            chart1: {
              value: total,
              total: total,
              label: formatAmount(total)
            },
            chart2: {
              value: collected,
              total: total,
              label: formatAmount(collected)
            },
            chart3: {
              value: remaining,
              total: total,
              label: formatAmount(remaining)
            }
          });

        } else {
          setChartData(defaultChartData);
        }
      } catch (e) {
        setChartData(defaultChartData);
      }
    }

    getData();
  }, []);

  const getPercentage = (value: number, total: number) => {
    return total > 0 ? ((value / total) * 100).toFixed(1) : '0.0';
  };

  const dataToShow = chart || defaultChartData;

  return (
    <div className="w-full lg:w-[55%] grid md:grid-cols-3 grid-cols-1 gap-10">
      <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" className="">
        <div className="chart-1 flex items-center justify-center relative">
          <Chart data={dataToShow.chart1} chartType="chart-1" />
          <span className="text-center text-blue-2000 absolute text-2xl font-medium">
            {getPercentage(dataToShow.chart1.value, dataToShow.chart1.total)}%
          </span>
        </div>
        <h3 className="lg:text-[25px] text-xl mt-4 text-blue-2000 font-semibold text-center leading-snug">Total funds {dataToShow.chart1.label}</h3>
      </div>
      <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="500" className="">
        <div className="chart-2 flex items-center justify-center relative">
          <Chart data={dataToShow.chart2} chartType="chart-2" />
          <span className="text-center text-blue-2000 absolute text-2xl font-medium">
            {getPercentage(dataToShow.chart2.value, dataToShow.chart2.total)}%
          </span>
        </div>
        <h3 className="lg:text-[25px] text-xl mt-4 text-blue-2000 font-semibold text-center leading-snug">Collected funds {dataToShow.chart2.label}</h3>
      </div>
      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" className="">
        <div className="chart-3 flex items-center justify-center relative">
          <Chart data={dataToShow.chart3} chartType="chart-3" />
          <span className="text-center text-blue-2000 absolute text-2xl font-medium">
            {getPercentage(dataToShow.chart3.value, dataToShow.chart3.total)}%
          </span>
        </div>
        <h3 className="lg:text-[25px] text-xl mt-4 text-blue-2000 font-semibold text-center leading-snug">Remaining funds {dataToShow.chart3.label}</h3>
      </div>
    </div>
  )
}

export default DonationProgress