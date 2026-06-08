import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
}

const ContactConfirmation = ({ name }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thanks for reaching out to proHIRE resources</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thank you for reaching out.</Heading>
        <Text style={p}>
          {name ? `Hi ${name},` : 'Hello,'}
        </Text>
        <Text style={p}>
          We've received your inquiry and will respond personally within one business day.
          All conversations are treated as confidential.
        </Text>
        <Text style={p}>
          In the meantime, if anything urgent comes up, simply reply to this email.
        </Text>
        <Hr style={hr} />
        <Text style={signature}>
          Chris Betz
          <br />
          CEO, proHIRE resources LLC
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmation,
  subject: 'We received your inquiry — proHIRE resources',
  displayName: 'Contact form — submitter confirmation',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Inter, Arial, sans-serif',
  color: '#1a1a1a',
}
const container = { padding: '36px 28px', maxWidth: '600px' }
const h1 = {
  fontFamily: 'Georgia, "Source Serif 4", serif',
  fontSize: '24px',
  fontWeight: 500,
  margin: '0 0 20px',
  color: '#1a1a1a',
}
const p = { fontSize: '15px', lineHeight: '1.6', color: '#1a1a1a', margin: '0 0 14px' }
const hr = { borderColor: '#e5e5e5', margin: '28px 0 20px' }
const signature = { fontSize: '14px', lineHeight: '1.5', color: '#444', margin: 0 }
