import antfu from '@antfu/eslint-config'

export default antfu({
    type: 'lib',
    jsonc: false,
    stylistic: false,
    typescript: {
        tsconfigPath: 'tsconfig.json',
        ignoresTypeAware: [
            'not-type-aware.ts',
        ],
    },
})
