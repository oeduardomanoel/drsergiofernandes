import { site } from '#shared/data/site'

export function siteUrl(): string {
  const config = useRuntimeConfig()
  return String(config.public.siteUrl || site.defaultUrl).replace(/\/$/, '')
}
