# Brewzle on Shopify with the AccelPay app (sales demo)

**Private sales demo.** This site uses Brewzle's name, marks, product imagery and copy
(from brewzle.com) to show their Shopify store with the AccelPay Shopify app installed. It is
not affiliated with or endorsed by Brewzle, it is not a store, and no order is ever placed
or charged. Shopify, Gopuff and ReserveBar marks belong to their owners. Keep the link
unlisted; share it 1:1 only.

Live: https://noshiftsherlock.github.io/brewzle-accelpay-demo/

## The pitch it shows

Brewzle runs two Shopify stores today: brewzle.com (merch, Club, events) and a separate
bottle shop for barrel picks, which is fulfilled through a third-party retailer. The demo
puts the barrel picks on brewzle.com itself, next to the merch, with the AccelPay Shopify
app routing each bottle order to a licensed retailer.

Platform checked 2026-10-24: `Shopify.shop` is set on the page and `/products.json`
serves the catalog. The demo keeps the theme look, the native Shopify cart drawer and the
Shopify one-page checkout. The AccelPay Shopify app takes over payments, taxes and order
routing to licensed retailers, so there is no third-party cart and the order and customer
record stay in the brand's Shopify admin. Small callouts at checkout mark what AccelPay does.

Express checkout (Shop Pay, Apple Pay, Google Pay) is supported by the AccelPay Shopify
integration and appears at the top of checkout and in the cart drawer. In the demo the
buttons fill a sample contact and address and continue.

| Page | What it shows |
| --- | --- |
| `index.html` | Home, collection, story, "How this works", team panel, reordering note |
| `product.html?p=<handle>` | Product page (Shopify theme style) |
| `checkout.html` | Shopify one-page checkout: express checkout plus card payment, shipping rate by address, AccelPay callouts |

## Real vs illustrative

Real:
- Products, images, copy and prices: brewzle.com Shopify products.json, 2026-10-24 (bottles from the Brewzle bottle shop products.json the same day).

Illustrative:
- The fulfilling retailer. No retailer in the ReserveBar/AccelPay network has the brand in
  stock today (checked 2026-10-24), so checkout shows a licensed retailer "assigned at launch".
- Shipping ($14.99), tax (8%), payment fields. Nothing is charged.
- No Gopuff option: the brand is not on Gopuff today (live check 2026-10-24).

Deploy: GitHub Pages serves `main`; a push is a deploy. Bump `?v=` on `styles.css` and
`app.js` when they change. Built by `build_demo.py` in the session scratchpad from the
leportier-accelpay-demo files.
