import { useState } from 'react'
import Link from 'next/link'

/* ---------- Settings you may want to tweak ---------- */
const COEFFICIENT = 0.85 // litres = area (m²) × rainfall (mm) × 0.85
const INDUSTRIAL_FROM = 500 // m² — at or above this the roof counts as Industrial, below it Residential
const INDUSTRIAL_TAG_AT = 1000 // m² — where the "Industrial" patch sits on the slider
const AREA = {
  min: 1,
  max: 1000000,
  sliderMin: 50,
  sliderMax: 5000,
  sliderStep: 10
}
const RAIN = { min: 0.25, max: 5000, sliderMax: 2500, step: 0.25 }
const TANKER_LITRES = 10000
const BARS = 24
const THUMB_PX = 16

/* ---------- Helpers ---------- */
const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n))
const isValid = (n, lo) => Number.isFinite(n) && n >= lo
const fmt = (n, digits = 0) =>
  n.toLocaleString('en-IN', { maximumFractionDigits: digits })

// Position of a value along the area slider (0–100), and a version that
// compensates for the slider thumb so markers line up with the handle.
const areaPct = v =>
  ((clamp(v, AREA.sliderMin, AREA.sliderMax) - AREA.sliderMin) /
    (AREA.sliderMax - AREA.sliderMin)) *
  100
const thumbAligned = p => `calc(${p}% + ${(0.5 - p / 100) * THUMB_PX}px)`

// Keeps a typed value and a numeric value in sync, so people can type freely
// (even an empty box) while the calculation always uses the last valid number.
function useNumberField (initial, min, max) {
  const [text, setText] = useState(String(initial))
  const [value, setValue] = useState(initial)
  const parsed = parseFloat(text)
  const valid = isValid(parsed, min)

  const commit = v => {
    const next = clamp(v, min, max)
    setValue(next)
    setText(String(next))
  }
  const onText = raw => {
    setText(raw)
    const p = parseFloat(raw)
    if (isValid(p, min)) setValue(Math.min(p, max))
  }
  const onBlur = () => commit(valid ? parsed : value)

  return { text, value, valid, commit, onText, onBlur }
}

/* ---------- Small pieces ---------- */
function NumberField ({ id, label, unit, field, min, max, step, errorText }) {
  return (
    <div>
      <label htmlFor={id} className='text-sm font-semibold text-slate-700'>
        {label}
      </label>
      <div
        className={`mt-1.5 flex items-center rounded-xl border bg-white px-3 py-2 focus-within:ring-2 ${
          field.valid
            ? 'border-slate-300 focus-within:border-indigo-500 focus-within:ring-indigo-200'
            : 'border-rose-400 focus-within:ring-rose-200'
        }`}
      >
        <input
          id={id}
          type='number'
          inputMode='decimal'
          min={min}
          max={max}
          step={step}
          value={field.text}
          onChange={e => field.onText(e.target.value)}
          onBlur={field.onBlur}
          aria-invalid={!field.valid}
          aria-describedby={field.valid ? undefined : `${id}-error`}
          className='w-full bg-transparent text-xl font-semibold text-slate-900 outline-none'
        />
        <span className='ml-2 flex-none text-sm text-slate-500'>{unit}</span>
      </div>
      {!field.valid && (
        <p id={`${id}-error`} className='mt-1 text-sm text-rose-600'>
          {errorText}
        </p>
      )}
    </div>
  )
}

function RainMeter ({ lit }) {
  const heights = [100, 72, 88, 60]
  return (
    <div
      aria-hidden='true'
      className='flex h-16 items-end justify-between px-1'
    >
      {Array.from({ length: BARS }, (_, i) => (
        <span
          key={i}
          style={{ height: `${heights[i % heights.length]}%` }}
          className={`w-1.5 rotate-[14deg] rounded-full transition-colors duration-300 motion-reduce:transition-none ${
            i < lit ? 'bg-sky-500' : 'bg-slate-200'
          }`}
        />
      ))}
    </div>
  )
}

/* ---------- Main component ---------- */
export default function RainwaterEstimator () {
  const area = useNumberField(1200, AREA.min, AREA.max)
  const rain = useNumberField(700, RAIN.min, RAIN.max)

  const litres = area.value * rain.value * COEFFICIENT
  const isIndustrial = area.value >= INDUSTRIAL_FROM
  const tagActive = area.value >= INDUSTRIAL_TAG_AT
  const litresText = litres < 100 ? fmt(litres, 2) : fmt(Math.round(litres))
  const lit = Math.round(BARS * clamp(Math.log10(litres + 1) / 9, 0, 1))

  const sliderArea = clamp(area.value, AREA.sliderMin, AREA.sliderMax)
  const sliderRain = clamp(rain.value, RAIN.min, RAIN.sliderMax)
  const tagLeft = thumbAligned(areaPct(INDUSTRIAL_TAG_AT))
  const splitAt = thumbAligned(areaPct(INDUSTRIAL_FROM))

  return (
    <section
      aria-labelledby='rwh-title'
      className='mx-auto w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg'
    >
      {/* Result */}
      <div className='bg-gradient-to-b from-sky-50 to-white px-7 pb-5 pt-7'>
        <div className='flex items-start justify-between gap-3'>
          <h2 id='rwh-title' className='text-lg font-semibold text-slate-800'>
            What your roof could collect
          </h2>
          <span
            className={`flex-none rounded-full px-3 py-1 text-sm font-semibold ${
              isIndustrial
                ? 'bg-indigo-100 text-indigo-800'
                : 'bg-sky-100 text-sky-800'
            }`}
          >
            {isIndustrial ? 'Industrial roof' : 'Residential roof'}
          </span>
        </div>

        <p aria-live='polite' className='mt-4'>
          <span className='block font-serif text-5xl font-bold leading-none tracking-tight text-slate-900 sm:text-6xl'>
            {litresText}
          </span>
          <span className='mt-2 block text-base text-slate-600'>
            litres of rainwater a year
          </span>
        </p>

        <div className='mt-5'>
          <RainMeter lit={lit} />
        </div>

        <dl className='mt-4 grid grid-cols-3 divide-x divide-slate-200 text-center'>
          <div className='px-2'>
            <dt className='text-sm text-slate-500'>Kilolitres</dt>
            <dd className='text-lg font-semibold text-slate-900'>
              {fmt(litres / 1000, 1)}
            </dd>
          </div>
          <div className='px-2'>
            <dt className='text-sm text-slate-500'>Tanker loads</dt>
            <dd className='text-lg font-semibold text-slate-900'>
              {fmt(litres / TANKER_LITRES, 1)}
            </dd>
          </div>
          <div className='px-2'>
            <dt className='text-sm text-slate-500'>Litres a day</dt>
            <dd className='text-lg font-semibold text-slate-900'>
              {fmt(litres / 365)}
            </dd>
          </div>
        </dl>
      </div>

      {/* Inputs */}
      <div className='space-y-5 px-7 pb-7'>
        {/* Rooftop area */}
        <div>
          <NumberField
            id='rwh-area'
            label='Rooftop area'
            unit='m²'
            field={area}
            min={AREA.min}
            max={AREA.max}
            step='any'
            errorText={`Enter an area of at least ${AREA.min} m².`}
          />

          <div className='relative mt-3 pt-8'>
            {/* Industrial patch pinned to the slider */}
            <span
              style={{ left: tagLeft }}
              className={`absolute top-0 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-semibold transition-colors motion-reduce:transition-none ${
                tagActive
                  ? 'bg-indigo-600 text-white'
                  : 'border border-indigo-300 bg-white text-indigo-700'
              }`}
            >
              Industrial
            </span>
            <span
              aria-hidden='true'
              style={{ left: tagLeft }}
              className={`absolute top-[26px] h-2.5 w-px -translate-x-1/2 ${
                tagActive ? 'bg-indigo-600' : 'bg-indigo-300'
              }`}
            />

            <input
              type='range'
              aria-label='Rooftop area slider'
              aria-valuetext={`${fmt(sliderArea)} square metres, ${
                isIndustrial ? 'industrial' : 'residential'
              }`}
              min={AREA.sliderMin}
              max={AREA.sliderMax}
              step={AREA.sliderStep}
              value={sliderArea}
              onChange={e => area.commit(+e.target.value)}
              className='block w-full accent-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500'
            />

            {/* Zone strip: residential below, industrial from the threshold */}
            <div
              aria-hidden='true'
              className='relative mt-1.5 h-1.5 overflow-hidden rounded-full bg-indigo-200'
            >
              <div style={{ width: splitAt }} className='h-full bg-sky-300' />
            </div>
            <div
              aria-hidden='true'
              className='mt-1.5 flex justify-between text-xs text-slate-500'
            >
              <span>
                {fmt(AREA.sliderMin)} m² · Residential below{' '}
                {fmt(INDUSTRIAL_FROM)}
              </span>
              <span>{fmt(AREA.sliderMax)} m²</span>
            </div>
          </div>
        </div>

        {/* Annual rainfall */}
        <div>
          <NumberField
            id='rwh-rain'
            label='Annual rainfall'
            unit='mm'
            field={rain}
            min={RAIN.min}
            max={RAIN.max}
            step={RAIN.step}
            errorText={`Enter at least ${RAIN.min} mm.`}
          />
          <input
            type='range'
            aria-label='Annual rainfall slider'
            aria-valuetext={`${fmt(sliderRain, 2)} millimetres`}
            min={RAIN.min}
            max={RAIN.sliderMax}
            step={RAIN.step}
            value={sliderRain}
            onChange={e => rain.commit(+e.target.value)}
            className='mt-3 block w-full accent-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500'
          />
          <div className='mt-1.5 flex justify-between text-xs text-slate-500'>
            <span>{RAIN.min} mm</span>
            <span>{fmt(RAIN.sliderMax)} mm</span>
          </div>
        </div>

        <p className='text-sm text-slate-600'>
          For any assistance, contact us for{' '}
          <bold className='text-red-600 font-semibold animate-pulse'>
            Free Consultation
          </bold>
          . Our experts will help you to design the best{' '}
          <Link
            href={'/rainwater-harvesting-system'}
            target='_blank'
            className='text-sky-600 font-semibold'
          >
            Rainwater Harvesting System
          </Link>{' '}
          for your project.
        </p>
      </div>
    </section>
  )
}
