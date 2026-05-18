import React from 'react';
import './Banner.scss';

// ── Status icons ──────────────────────────────────────────────────────────────

const InfoIcon = ({ color = '#1A73EB' }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="8" stroke={color} strokeWidth="1.5" />
    <line x1="9" y1="8" x2="9" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9" cy="5.5" r="0.75" fill={color} />
  </svg>
);

const ErrorIcon = ({ color = '#C70000' }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="8" stroke={color} strokeWidth="1.5" />
    <line x1="9" y1="5" x2="9" y2="10.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9" cy="12.75" r="0.75" fill={color} />
  </svg>
);

const WarningIcon = ({ color = '#A3600E' }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M9 2L16.5 15.5H1.5L9 2Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <line x1="9" y1="7.5" x2="9" y2="11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9" cy="13.5" r="0.75" fill={color} />
  </svg>
);

const SuccessIcon = ({ color = '#007700' }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="8" stroke={color} strokeWidth="1.5" />
    <path
      d="M5.5 9L7.75 11.5L12.5 6.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <line x1="4.5" y1="4.5" x2="13.5" y2="13.5" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="13.5" y1="4.5" x2="4.5" y2="13.5" stroke="#5C5C5C" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PlusIcon = ({ color = '#1A73EB' }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <line x1="7" y1="2" x2="7" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="2" y1="7" x2="12" y2="7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ── Config map ────────────────────────────────────────────────────────────────

const TYPE_CONFIG = {
  info: {
    icon: InfoIcon,
    iconColor: '#1A73EB',
    accentVar: '--banner-accent-info',
    bgVar: '--banner-bg-info',
    inline: false,
  },
  'info-neutral': {
    icon: InfoIcon,
    iconColor: '#1A73EB',
    accentVar: '--banner-accent-info',
    bgVar: '--banner-bg-neutral',
    inline: false,
  },
  error: {
    icon: ErrorIcon,
    iconColor: '#C70000',
    accentVar: '--banner-accent-error',
    bgVar: '--banner-bg-error',
    inline: false,
  },
  warning: {
    icon: WarningIcon,
    iconColor: '#A3600E',
    accentVar: '--banner-accent-warning',
    bgVar: '--banner-bg-warning',
    inline: false,
  },
  success: {
    icon: SuccessIcon,
    iconColor: '#007700',
    accentVar: '--banner-accent-success',
    bgVar: '--banner-bg-success',
    inline: false,
  },
  'inline-info': {
    icon: InfoIcon,
    iconColor: '#1A73EB',
    accentVar: '--banner-accent-info',
    bgVar: '--banner-bg-info',
    inline: true,
  },
  'inline-neutral': {
    icon: null,
    iconColor: null,
    accentVar: '--banner-accent-neutral',
    bgVar: '--banner-bg-neutral',
    inline: true,
  },
  'inline-error': {
    icon: ErrorIcon,
    iconColor: '#C70000',
    accentVar: '--banner-accent-error',
    bgVar: '--banner-bg-error',
    inline: true,
  },
  'inline-warn': {
    icon: WarningIcon,
    iconColor: '#A3600E',
    accentVar: '--banner-accent-warning',
    bgVar: '--banner-bg-warning',
    inline: true,
  },
  'inline-success': {
    icon: SuccessIcon,
    iconColor: '#007700',
    accentVar: '--banner-accent-success',
    bgVar: '--banner-bg-success',
    inline: true,
  },
};

// ── Banner component ──────────────────────────────────────────────────────────

/**
 * Banner — a notification strip supporting 10 type variants.
 *
 * Types (inline = single-line copy; block = heading + body):
 *   info | info-neutral | error | warning | success
 *   inline-info | inline-neutral | inline-error | inline-warn | inline-success
 */
export default function Banner({
  type = 'info',
  heading = 'At the moment, we are unable to identify the cause of the connection problem.',
  body = 'Get help from the Builder community. This is the best place to get technical assistance from the team.',
  copy = 'Single line information with an action and dismiss option.',
  showHeading = true,
  showBody = true,
  showButtons = true,
  showDismiss = true,
  primaryLabel = 'Primary Action',
  secondaryLabel = 'Secondary Action',
  onPrimaryAction,
  onSecondaryAction,
  onDismiss,
  className = '',
}) {
  const config = TYPE_CONFIG[type] || TYPE_CONFIG.info;
  const { icon: Icon, iconColor, accentVar, bgVar, inline } = config;

  return (
    <div
      className={`banner banner--${type} ${inline ? 'banner--inline' : 'banner--block'} ${className}`}
      style={{
        borderLeftColor: `var(${accentVar})`,
        backgroundColor: `var(${bgVar})`,
      }}
      role="status"
      aria-live="polite"
    >
      {/* Left accent bar */}
      <span className="banner__accent-bar" style={{ backgroundColor: `var(${accentVar})` }} aria-hidden="true" />

      {/* Status icon */}
      {Icon && (
        <span className="banner__icon">
          <Icon color={iconColor} />
        </span>
      )}

      {/* Content */}
      <div className="banner__content">
        {inline ? (
          <p className="banner__copy">{copy}</p>
        ) : (
          <>
            {showHeading && <p className="banner__heading">{heading}</p>}
            {showBody && <p className="banner__body">{body}</p>}
          </>
        )}

        {showButtons && (
          <div className="banner__actions">
            <button
              type="button"
              className="banner__btn banner__btn--primary"
              onClick={onPrimaryAction}
            >
              {primaryLabel}
            </button>
            <button
              type="button"
              className="banner__btn banner__btn--secondary"
              onClick={onSecondaryAction}
            >
              <PlusIcon color="#1A73EB" />
              {secondaryLabel}
            </button>
          </div>
        )}
      </div>

      {/* Dismiss */}
      {showDismiss && (
        <button
          type="button"
          className="banner__dismiss"
          aria-label="Dismiss notification"
          onClick={onDismiss}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
}
