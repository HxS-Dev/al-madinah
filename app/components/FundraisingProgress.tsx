'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { sanityClient } from '../lib/sanity'
import { donationQuery } from '../lib/queries'

const FundraisingProgress = () => {
  const [data, setData] = useState({
    target: 2100000,
    raised: 2100000,
    remaining: 0,
    percentage: 100
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await sanityClient.fetch(donationQuery)
        if (Array.isArray(result) && result.length > 0) {
          const donation = result[0]
          const target = donation.targetAmount || 2100000
          const raised = donation.amountCollected || 2100000
          const remaining = Math.max(target - raised, 0)
          const percentage = target > 0 ? Math.round((raised / target) * 100) : 0
          
          setData({ target, raised, remaining, percentage })
        }
      } catch (error) {
        console.error('Error fetching donation data:', error)
      }
    }
    fetchData()
  }, [])

  const formatAmount = (amount: number): string => {
    if (amount >= 1_000_000) {
      return `£${(amount / 1_000_000).toFixed(1)}M`
    } else if (amount >= 1_000) {
      return `£${(amount / 1_000).toFixed(0)}K`
    }
    return `£${amount}`
  }

  const pieData = [
    { name: 'Raised', value: data.raised, color: '#1b5e3f' },
    { name: 'Remaining', value: data.remaining, color: '#e0f2e9' }
  ]

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="relative w-64 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => formatAmount(value)}
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              {/* Center percentage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#1b5e3f]">{data.percentage}%</p>
                  <p className="text-sm text-gray-600">Complete</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Campaign Progress</h3>
                <p className="text-gray-600">Supporting our community's growth and development</p>
              </div>
              
              {/* Progress Bar */}
              <div className="relative">
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${data.percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#1b5e3f] to-[#237a4f]"
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-gray-600">£0</span>
                  <span className="font-semibold text-[#1b5e3f]">{formatAmount(data.target)}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-[#1b5e3f] to-[#237a4f] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-extrabold drop-shadow-lg" style={{ color: '#ffffff' }}>Target Amount</h4>
                <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 8.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Zm0 8v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Zm-3-3h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1Zm8 0h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1ZM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"/>
                </svg>
              </div>
              <p className="text-3xl font-black" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>{formatAmount(data.target)}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-extrabold drop-shadow-lg" style={{ color: '#ffffff' }}>Amount Raised</h4>
                <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 9V7a5 5 0 0 1 10 0v2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Zm8-2v2H7V7a3 3 0 0 1 6 0Z"/>
                </svg>
              </div>
              <p className="text-3xl font-black" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>{formatAmount(data.raised)}</p>
              <p className="text-sm font-bold mt-1" style={{ color: '#ffffff' }}>Thank you for your support!</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-extrabold drop-shadow-lg" style={{ color: '#ffffff' }}>Still Needed</h4>
                <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <p className="text-3xl font-black" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>{formatAmount(data.remaining)}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FundraisingProgress