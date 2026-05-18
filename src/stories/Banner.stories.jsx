import React from 'react';
import Banner from '../components/Banner';

export default {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A notification banner supporting 10 type variants: block banners (info, info-neutral, error, warning, success) with heading + body, and inline banners (inline-info, inline-neutral, inline-error, inline-warn, inline-success) with a single line of copy.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'info',
        'info-neutral',
        'error',
        'warning',
        'success',
        'inline-info',
        'inline-neutral',
        'inline-error',
        'inline-warn',
        'inline-success',
      ],
      description: 'Visual variant that controls icon, accent color, and layout.',
    },
    heading: {
      control: 'text',
      description: 'Bold heading text — shown only in block (non-inline) variants.',
    },
    body: {
      control: 'text',
      description: 'Body copy — shown only in block (non-inline) variants.',
    },
    copy: {
      control: 'text',
      description: 'Single-line copy — shown only in inline variants.',
    },
    showHeading: { control: 'boolean' },
    showBody: { control: 'boolean' },
    showButtons: { control: 'boolean' },
    showDismiss: { control: 'boolean' },
    primaryLabel: { control: 'text' },
    secondaryLabel: { control: 'text' },
  },
};

// ── Shared story wrapper ───────────────────────────────────────────────────────

const BannerWrapper = (args) => (
  <div style={{ maxWidth: '724px', width: '100%' }}>
    <Banner {...args} />
  </div>
);

// ── Playground (all controls) ─────────────────────────────────────────────────

export const Playground = BannerWrapper.bind({});
Playground.args = {
  type: 'info',
  heading: 'At the moment, we are unable to identify the cause of the connection problem.',
  body: 'Get help from the Builder community. This is the best place to get technical assistance from the team.',
  copy: 'Single line information with an action and dismiss option.',
  showHeading: true,
  showBody: true,
  showButtons: true,
  showDismiss: true,
  primaryLabel: 'Primary Action',
  secondaryLabel: 'Secondary Action',
};
Playground.parameters = {
  docs: { description: { story: 'Interactive playground — use the controls panel to try every prop and variant.' } },
};

// ── Individual stories ────────────────────────────────────────────────────────

export const Info = () => (
  <div style={{ maxWidth: '724px' }}>
    <Banner type="info" />
  </div>
);
Info.parameters = {
  docs: { description: { story: 'Block banner — information state with heading, body copy, actions and dismiss.' } },
};

export const InfoNeutral = () => (
  <div style={{ maxWidth: '724px' }}>
    <Banner type="info-neutral" />
  </div>
);
InfoNeutral.storyName = 'Info — Neutral background';
InfoNeutral.parameters = {
  docs: { description: { story: 'Same info icon but with a neutral (grey) background instead of blue tint.' } },
};

export const Error = () => (
  <div style={{ maxWidth: '724px' }}>
    <Banner type="error" />
  </div>
);
Error.parameters = {
  docs: { description: { story: 'Block banner — error state.' } },
};

export const Warning = () => (
  <div style={{ maxWidth: '724px' }}>
    <Banner type="warning" />
  </div>
);
Warning.parameters = {
  docs: { description: { story: 'Block banner — warning state.' } },
};

export const Success = () => (
  <div style={{ maxWidth: '724px' }}>
    <Banner type="success" />
  </div>
);
Success.parameters = {
  docs: { description: { story: 'Block banner — success state.' } },
};

export const InlineInfo = () => (
  <div style={{ maxWidth: '724px' }}>
    <Banner type="inline-info" />
  </div>
);
InlineInfo.storyName = 'Inline — Info';
InlineInfo.parameters = {
  docs: { description: { story: 'Single-line inline banner with info icon.' } },
};

export const InlineNeutral = () => (
  <div style={{ maxWidth: '724px' }}>
    <Banner type="inline-neutral" />
  </div>
);
InlineNeutral.storyName = 'Inline — Neutral';
InlineNeutral.parameters = {
  docs: { description: { story: 'Single-line inline banner with no status icon — neutral / low-priority.' } },
};

export const InlineError = () => (
  <div style={{ maxWidth: '724px' }}>
    <Banner type="inline-error" />
  </div>
);
InlineError.storyName = 'Inline — Error';
InlineError.parameters = {
  docs: { description: { story: 'Single-line inline banner with error icon.' } },
};

export const InlineWarning = () => (
  <div style={{ maxWidth: '724px' }}>
    <Banner type="inline-warn" />
  </div>
);
InlineWarning.storyName = 'Inline — Warning';
InlineWarning.parameters = {
  docs: { description: { story: 'Single-line inline banner with warning icon.' } },
};

export const InlineSuccess = () => (
  <div style={{ maxWidth: '724px' }}>
    <Banner type="inline-success" />
  </div>
);
InlineSuccess.storyName = 'Inline — Success';
InlineSuccess.parameters = {
  docs: { description: { story: 'Single-line inline banner with success icon.' } },
};

// ── All variants side-by-side ─────────────────────────────────────────────────

export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '724px' }}>
    <p style={{ margin: '0 0 4px', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>
      Block banners
    </p>
    <Banner type="info" />
    <Banner type="info-neutral" />
    <Banner type="error" />
    <Banner type="warning" />
    <Banner type="success" />

    <p style={{ margin: '12px 0 4px', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>
      Inline banners
    </p>
    <Banner type="inline-info" />
    <Banner type="inline-neutral" />
    <Banner type="inline-error" />
    <Banner type="inline-warn" />
    <Banner type="inline-success" />
  </div>
);
AllVariants.storyName = 'All Variants';
AllVariants.parameters = {
  docs: {
    description: {
      story: 'All 10 Banner variants displayed together for a quick visual comparison.',
    },
  },
};
