import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import { motion } from 'framer-motion'
import { sites, severity, severityColor, severityLabel, CONTROL } from '../data/sites'

const legendOrder = ['good', 'warning', 'serious', 'critical']

export default function StreamMap() {
  const center = [44.15, -111.98]

  return (
    <section id="map" className="bg-stream-950 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-clay-400">
            18 Sample Sites
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-stream-50 sm:text-5xl">
            Clark &amp; Madison Counties, Idaho
          </h2>
          <p className="mt-4 max-w-2xl text-stream-300">
            Samples were drawn from headwater streams around Kilgore and Spencer in Clark
            County, and from tributaries near Rexburg in Madison County — real GPS-tagged
            sites, color-coded by microplastic particles found per liter. Control = {CONTROL}.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-2xl border border-stream-800 shadow-2xl"
        >
          <MapContainer
            center={center}
            zoom={9}
            scrollWheelZoom={false}
            style={{ height: '480px', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {sites.map((site) => (
              <CircleMarker
                key={site.id}
                center={[site.lat, site.lng]}
                radius={9}
                pathOptions={{
                  color: '#fff',
                  weight: 2,
                  fillColor: severityColor[severity(site.count)],
                  fillOpacity: 0.9,
                }}
              >
                <Popup>
                  <div className="font-sans">
                    <p className="font-semibold">{site.id}</p>
                    <p className="text-sm text-stream-700">{site.county} County</p>
                    <p className="mt-1 text-sm">
                      <span className="font-semibold">{site.count}</span> microplastics / L
                    </p>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </motion.div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          {legendOrder.map((key) => (
            <div key={key} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full border border-white/40"
                style={{ backgroundColor: severityColor[key] }}
              />
              <span className="text-sm text-stream-300">{severityLabel[key]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
