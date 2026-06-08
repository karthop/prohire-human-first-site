import type { ComponentType } from 'npm:react@18.3.1'
import { template as contactOwnerNotification } from './contact-owner-notification.tsx'
import { template as contactConfirmation } from './contact-confirmation.tsx'

export interface TemplateEntry {
  component: ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  displayName?: string
  previewData?: Record<string, any>
  to?: string
}

export const TEMPLATES: Record<string, TemplateEntry> = {
  'contact-owner-notification': contactOwnerNotification,
  'contact-confirmation': contactConfirmation,
}
