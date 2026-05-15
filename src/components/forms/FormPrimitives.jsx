import { forwardRef, useId } from 'react'
import { cn } from '@/lib/utils.js'

/**
 * Form primitives — Field wrapper + Input / Textarea / Select / Radio.
 *
 * Designed to integrate with react-hook-form via spread:
 *   <Input {...register('phone')} error={errors.phone?.message} />
 *
 * Field handles label + hint + error + ARIA wiring.
 */

const baseControl =
  'block w-full rounded-btn border bg-surface text-body text-text-primary placeholder:text-text-muted ' +
  'transition focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-1 ' +
  'disabled:cursor-not-allowed disabled:bg-primary-50'

const okBorder = 'border-border-DEFAULT focus:border-accent-blue'
const errBorder = 'border-emergency focus:border-emergency focus:ring-emergency'

const sizes = {
  md: 'px-3.5 py-2.5 text-body min-h-[44px]',
  lg: 'px-4 py-3 text-body-lg min-h-[52px]',
}

export function Field({ label, htmlFor, hint, error, required, className, children }) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={htmlFor} className="text-body-sm font-medium text-text-primary">
          {label}
          {required && <span className="ml-0.5 text-emergency" aria-hidden="true">*</span>}
        </label>
      )}
      {children}
      {hint && !error && <p className="text-caption text-text-muted">{hint}</p>}
      {error && (
        <p id={`${htmlFor}-error`} className="text-caption font-medium text-emergency" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export const Input = forwardRef(function Input(
  { label, hint, error, required, size = 'md', className, type = 'text', id, ...rest },
  ref,
) {
  const auto = useId()
  const inputId = id || auto
  return (
    <Field label={label} htmlFor={inputId} hint={hint} error={error} required={required}>
      <input
        ref={ref}
        id={inputId}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn(baseControl, sizes[size], error ? errBorder : okBorder, className)}
        {...rest}
      />
    </Field>
  )
})

export const Textarea = forwardRef(function Textarea(
  { label, hint, error, required, rows = 4, className, id, ...rest },
  ref,
) {
  const auto = useId()
  const inputId = id || auto
  return (
    <Field label={label} htmlFor={inputId} hint={hint} error={error} required={required}>
      <textarea
        ref={ref}
        id={inputId}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn(baseControl, 'px-3.5 py-2.5 text-body', error ? errBorder : okBorder, className)}
        {...rest}
      />
    </Field>
  )
})

export const Select = forwardRef(function Select(
  { label, hint, error, required, size = 'md', className, id, children, ...rest },
  ref,
) {
  const auto = useId()
  const inputId = id || auto
  return (
    <Field label={label} htmlFor={inputId} hint={hint} error={error} required={required}>
      <select
        ref={ref}
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn(baseControl, sizes[size], 'pr-9 appearance-none bg-no-repeat', error ? errBorder : okBorder, className)}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2364748B'%3E%3Cpath d='M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 011.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z'/%3E%3C/svg%3E\")",
          backgroundPosition: 'right 0.75rem center',
          backgroundSize: '1.25rem',
        }}
        {...rest}
      >
        {children}
      </select>
    </Field>
  )
})

/**
 * RadioGroup — usage:
 *   <RadioGroup label="Urgency" name="urgency" options={[{value, label, hint?}]} value={field.value} onChange={field.onChange} />
 */
export function RadioGroup({ label, name, options, value, onChange, error, required, hint }) {
  const groupId = useId()
  return (
    <fieldset className="flex flex-col gap-2" aria-describedby={error ? `${groupId}-error` : undefined}>
      {label && (
        <legend className="text-body-sm font-medium text-text-primary">
          {label}
          {required && <span className="ml-0.5 text-emergency" aria-hidden="true">*</span>}
        </legend>
      )}
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((o) => {
          const selected = value === o.value
          return (
            <label
              key={o.value}
              className={cn(
                'flex cursor-pointer items-start gap-3 rounded-btn border bg-surface p-3 transition',
                selected ? 'border-accent-blue ring-2 ring-accent-blue/30' : 'border-border-DEFAULT hover:border-accent-blue',
              )}
            >
              <input
                type="radio"
                name={name}
                value={o.value}
                checked={selected}
                onChange={() => onChange(o.value)}
                className="mt-0.5 h-4 w-4 cursor-pointer accent-accent-blue"
              />
              <span className="flex flex-col gap-0.5">
                <span className="text-body-sm font-medium text-text-primary">{o.label}</span>
                {o.hint && <span className="text-caption text-text-muted">{o.hint}</span>}
              </span>
            </label>
          )
        })}
      </div>
      {hint && !error && <p className="text-caption text-text-muted">{hint}</p>}
      {error && (
        <p id={`${groupId}-error`} className="text-caption font-medium text-emergency" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  )
}

export default { Field, Input, Textarea, Select, RadioGroup }
