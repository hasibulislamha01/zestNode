'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'



const colors = {
  primary: '#3b82f6',
  border: '#e5e7eb',
  background: '#ffffff',
}

export function RatingChart({ratingData}) {
  return (
    <div className="w-full h-96 p-6 bg-background rounded-lg border border-dashed border-gray-400">
      <h2 className="text-lg font-semibold text-foreground mb-4">Rating Distribution</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={ratingData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={90} />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.background,
              border: `1px solid ${colors.border}`,
              borderRadius: '6px',
            }}
            formatter={(value) => [value.toLocaleString(), 'Count']}
          />
          <Legend />
          <Bar dataKey="count" fill="#ebae34" name="Number of Reviews" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
