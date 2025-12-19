function FormInput({
    label,
    type = 'text',
    name,
    value,
    onChange,
    placeholder,
    error,
    required = false,
    autoComplete,
    disabled = false
}) {
    return (
        <div className="mb-4">
            <label
                htmlFor={name}
                className="block text-sm font-semibold text-gray-700 mb-2"
            >
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                autoComplete={autoComplete}
                disabled={disabled}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${error
                        ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200'
                        : 'border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200'
                    } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} outline-none`}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${name}-error` : undefined}
            />
            {error && (
                <p
                    id={`${name}-error`}
                    className="mt-2 text-sm text-red-600 flex items-center gap-1"
                    role="alert"
                >
                    <span>⚠️</span>
                    <span>{error}</span>
                </p>
            )}
        </div>
    );
}

export default FormInput;
