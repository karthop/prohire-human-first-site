import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  company?: string
  role?: string
  phone?: string
  inquiryType?: string
  message?: string
}

const OwnerNotification = ({
  name = '',
  email = '',
  company = '',
  role = '',
  phone = '',
  inquiryType = '',
  message = '',
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New inquiry from {name || 'website visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New inquiry — proHIRE resources</Heading>
        <Text style={muted}>Submitted via prohireresources.com contact form.</Text>
        <Hr style={hr} />
        <Section>
          <Row label="Name" value={name} />
          <Row label="Email" value={email} />
          <Row label="Company" value={company} />
          <Row label="Role" value={role} />
          {phone ? <Row label="Phone" value={phone} /> : null}
          <Row label="Inquiry" value={inquiryType} />
        </Section>
        <Hr style={hr} />
        <Text style={label}>Message</Text>
        <Text style={messageStyle}>{message}</Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label: l, value }: { label: string; value: string }) => (
  <Text style={rowStyle}>
    <span style={label}>{l}: </span>
    <span style={valueStyle}>{value}</span>
  </Text>
)

export const template = {
  component: OwnerNotification,
  subject: (data: Record<string, any>) =>
    `Inquiry from ${data?.name || 'website visitor'}${data?.company ? ` — ${data.company}` : ''}`,
  displayName: 'Contact form — owner notification',
  to: 'cbetz@prohireresources.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    company: 'Acme Corp',
    role: 'CHRO',
    phone: '+1 555 555 5555',
    inquiryType: 'Executive search / fractional CXO',
    message: 'We are exploring a confidential CXO search and would like to talk.',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Inter, Arial, sans-serif',
  color: '#1a1a1a',
}
const container = { padding: '32px 28px', maxWidth: '640px' }
const h1 = {
  fontFamily: 'Georgia, "Source Serif 4", serif',
  fontSize: '22px',
  fontWeight: 500,
  margin: '0 0 8px',
}
const muted = { color: '#666', fontSize: '13px', margin: '0' }
const hr = { borderColor: '#e5e5e5', margin: '20px 0' }
const rowStyle = { margin: '6px 0', fontSize: '14px', lineHeight: '1.5' }
const label = { color: '#666', fontSize: '12px', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }
const valueStyle = { color: '#1a1a1a' }
const messageStyle = { whiteSpace: 'pre-wrap' as const, fontSize: '14px', lineHeight: '1.6', color: '#1a1a1a' }
