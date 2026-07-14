import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Cell,
} from 'recharts'
import { Table2, BarChart3 } from 'lucide-react'
import { sites, severity, severityColor, CONTROL } from '../data/sites'

const chartData = [...sites]
  .sort((a, b) => a.count - b.count)
  .map((s) => ({ ...s, fill: severityColor[severity(s.count)] }))

const avg = (sites.reduce((sum, s) => sum + s.count, 0) / sites.length).toFixed(1)
const aboveControl = sites.filter((s) => s.count > CONTROL).length

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="rounded-lg border border-stream-200 bg-white px-3 py-2 text-sm shadow-lg">
      <p className="font-semibold text-stream-900">{d.id}</p>
      <p className="text-stream-600">{d.county} County</p>
      <p className="mt-1 font-medium text-stream-900">{d.count} microplastics / L</p>
    </div>
  )
}

export default function DataSection() {
  const [view, setView] = useState('chart')

  return (
    <section id="data" className="bg-stream-50 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-stream-500">
            Results
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-stream-900 sm:text-5xl">
            What we found
          </h2>
        </motion.div>

        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6">
          {[
            { label: 'Sites sampled', value: sites.length },
            { label: 'Avg. particles / L', value: avg },
            { label: 'Above control', value: `${aboveControl}/${sites.length}` },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-stream-200 bg-white px-4 py-5 text-center shadow-sm sm:px-6 sm:py-6"
            >
              <p className="font-display text-2xl font-semibold text-stream-900 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-stream-500 sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <p className="text-sm text-stream-600">
            Microplastic particles per liter, by site — control ({CONTROL}/L) marked for reference.
          </p>
          <div className="flex gap-1 rounded-lg border border-stream-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setView('chart')}
              aria-pressed={view === 'chart'}
              className={`rounded-md p-1.5 ${view === 'chart' ? 'bg-stream-700 text-white' : 'text-stream-500'}`}
              aria-label="Chart view"
            >
              <BarChart3 className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setView('table')}
              aria-pressed={view === 'table'}
              className={`rounded-md p-1.5 ${view === 'table' ? 'bg-stream-700 text-white' : 'text-stream-500'}`}
              aria-label="Table view"
            >
              <Table2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {view === 'chart' ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 h-80 rounded-xl border border-stream-200 bg-white p-4 sm:h-96 sm:p-6"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid stroke="#e1e0d9" vertical={false} />
                <XAxis
                  dataKey="id"
                  tick={{ fontSize: 11, fill: '#898781' }}
                  axisLine={{ stroke: '#c3c2b7' }}
                  tickLine={false}
                  interval={0}
                  angle={-40}
                  textAnchor="end"
                  height={60}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: '#898781' }}
                  axisLine={false}
                  tickLine={false}
                  label={{ value: 'particles / L', angle: -90, position: 'insideLeft', fontSize: 11, fill: '#898781' }}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(47,124,138,0.06)' }} />
                <ReferenceLine
                  y={CONTROL}
                  stroke="#24616e"
                  strokeDasharray="4 4"
                  label={{ value: 'control', position: 'right', fontSize: 11, fill: '#24616e' }}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]} maxBarSize={28}>
                  {chartData.map((entry) => (
                    <Cell key={entry.id} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 overflow-hidden rounded-xl border border-stream-200 bg-white"
          >
            <table className="w-full text-left text-sm">
              <thead className="bg-stream-100 text-stream-600">
                <tr>
                  <th className="px-4 py-3 font-medium">Site</th>
                  <th className="px-4 py-3 font-medium">County</th>
                  <th className="px-4 py-3 font-medium text-right">Particles / L</th>
                </tr>
              </thead>
              <tbody>
                {chartData
                  .slice()
                  .reverse()
                  .map((s) => (
                    <tr key={s.id} className="border-t border-stream-100">
                      <td className="px-4 py-2.5 font-medium text-stream-900">{s.id}</td>
                      <td className="px-4 py-2.5 text-stream-600">{s.county}</td>
                      <td className="px-4 py-2.5 text-right">
                        <span
                          className="inline-flex min-w-[2.5rem] justify-center rounded-full px-2 py-0.5 font-semibold text-white"
                          style={{ backgroundColor: s.fill }}
                        >
                          {s.count}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </section>
  )
}
