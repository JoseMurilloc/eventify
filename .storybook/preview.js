import AppProviders from '../src/contexts'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators= [
  (Story) =>(
    <AppProviders>
      <Story />
    </AppProviders>
  )
]
