export type FunctionalComponent = (props: any) => JSX.Element

export interface Route {
  path: string
  component: FunctionalComponent | React.ComponentType<any>
  children?: Route[]
  meta?: any
}
