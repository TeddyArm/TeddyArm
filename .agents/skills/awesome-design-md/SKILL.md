---
name: awesome-design-md
description: >
  Library of 74 DESIGN.md design-system reference files reverse-engineered from real product
  websites (Stripe, Airbnb, Linear, Notion, Vercel, Apple, Tesla, Figma, Spotify, and more).
  Use whenever the user asks to build, redesign, clone, or restyle a UI "like <site/brand>",
  or to match a specific brand's colors, typography, spacing, or component style. Each
  DESIGN.md defines concrete design tokens (colors, type scale, spacing, component rules) for
  that brand's visual language, following Google Stitch's DESIGN.md convention. Trigger on
  phrases like "make it look like Stripe", "Airbnb-style design", "Linear aesthetic", or any
  request naming one of the bundled brands as a visual reference.
license: MIT
metadata:
  author: voltagent
  source: https://github.com/voltagent/awesome-design-md
  version: "1.0.0"
---

# Awesome DESIGN.md — Real-World Design System Library

A bundled collection of `DESIGN.md` files — plain-text design-system documents in the
[Google Stitch DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/) convention —
each reverse-engineered from a real product's public marketing/app UI. A DESIGN.md defines a
brand's colors, typography scale, spacing, and component tokens as structured YAML/markdown, so
an agent can apply a specific visual language directly without guessing at hex codes or fonts.

These are AI-generated *approximations* of each brand's design language, not official design
specs or affiliated releases. Do not present generated output as the real company's product, and
avoid reproducing trademarked logos/wordmarks.

## When to use this skill

- The user asks to build, clone, redesign, or restyle a page/component "like `<site>`"
  (e.g. "give this a Stripe-style redesign", "make the dashboard feel like Linear").
- The user names a brand/product as a visual reference for tone, color, or typography.
- The user asks what design systems are available in this bundle.

## Available design systems

`design-md/<slug>/DESIGN.md` — one per entry below:

airbnb, airtable, apple, binance, bmw, bmw-m, bugatti, cal, claude, clay, clickhouse, cohere,
coinbase, composio, cursor, dell-1996, elevenlabs, expo, ferrari, figma, framer, hashicorp, hp,
ibm, intercom, kraken, lamborghini, linear.app, lovable, mastercard, meta, minimax, mintlify,
miro, mistral.ai, mongodb, nike, nintendo-2001, notion, nvidia, ollama, opencode.ai, pinterest,
playstation, posthog, raycast, renault, replicate, resend, revolut, runwayml, sanity, sentry,
shopify, slack, spacex, spotify, starbucks, stripe, supabase, superhuman, tesla, theverge,
together.ai, uber, vercel, vodafone, voltagent, warp, webflow, wired, wise, x.ai, zapier

Each site folder also has its own `README.md` with notes/attribution for that entry.

## Workflow

1. **Match the brand.** Map the user's request to the closest slug above (case-insensitive,
   ignore punctuation — e.g. "Linear" → `linear.app`, "X.ai" / "Grok" → `x.ai`). If nothing
   matches closely, say so rather than guessing at an unrelated one.
2. **Read the tokens.** Read `design-md/<slug>/DESIGN.md` in full — it defines `colors`,
   `typography`, spacing, and component rules as structured data.
3. **Apply directly.** Use the exact color hex values, font stacks, sizes, weights, and spacing
   from that file when generating or restyling the UI, rather than inventing new ones. Keep
   fonts to the file's stack + sensible system-font fallbacks (some fonts named may be
   proprietary/licensed and unavailable — fall back gracefully).
4. **Note the source.** If relevant, mention that the styling is inspired by/approximated from
   the named brand's public site, not an official asset.
