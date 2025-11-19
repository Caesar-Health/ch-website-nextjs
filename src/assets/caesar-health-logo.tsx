export function CaesarHealthLogo({ className }: { className?: string }) {
  return (
    <img
      src="/images/caesar-health-simplified.svg"
      alt="Caesar Health"
      className={className}
    />
  )
}

// Text-based alternative
export function CaesarHealthLogoText({ className }: { className?: string }) {
  return (
    <div className={className}>
      <span style={{ fontWeight: 700, fontSize: '1.2em' }}>CH</span>
    </div>
  )
}

