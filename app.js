/* Brewzle demo: their Shopify store with the AccelPay Shopify app.
 *
 * Same pattern as leportier-accelpay-demo: the storefront, cart drawer and one-page
 * checkout imitate Shopify. What AccelPay adds is shown as small callouts at checkout:
 * payments, taxes and routing each order to a licensed retailer by the shipping address.
 * Express checkout (Shop Pay, Apple Pay, Google Pay) is supported by the AccelPay Shopify
 * integration and appears at the top of checkout and in the cart drawer.
 *
 * WHAT IS REAL AND WHAT IS NOT
 *   Real:  products, images, copy and prices from brewzle.com (Shopify products.json,
 *          2026-10-24, bottles from the Brewzle bottle shop products.json).
 *   Not:   the fulfilling retailer (no network retailer stocks the brand today, so the
 *          route reads "assigned at launch"), shipping rate, tax rate, the payment step.
 *          No order is ever placed.
 */
(function () {
  'use strict';

  const CATALOG = {
 "frey-ranch-very-small-batch-brewzle-ii": {
  "name": "Frey Ranch Very Small Batch \"Brewzle II\"",
  "short": "Frey Ranch Very Small Batch \"Brewzle II\"",
  "size": "750ML",
  "tag": "127.88 Proof · Brewzle Exclusive",
  "price": 9800,
  "connected": true,
  "image": "assets/p-frey-ranch-very-small-batch-brewzle-ii-0.webp",
  "gallery": [
   "assets/p-frey-ranch-very-small-batch-brewzle-ii-0.webp"
  ],
  "lead": "This private blend, blended by Brewzle, for the Brewzle Club.",
  "specs": "127.88 PROOF / BREWZLE EXCLUSIVE / 750ML",
  "desc": [
   "This bourbon-and-rye blend brings together six barrels of Frey Ranch’s craft whiskey to create an American whiskey unlike anything you’ve had before.",
   "Blended last January during what has become a regular trip out to Frey Ranch, this is our second Very Small Batch custom blend, and one that took a full day of tasting, tinkering, and dialing in to get it just right.",
   "Nose - Dark cola, red fruit, typical Frey Ranch grain forwardness, dark caramel"
  ]
 },
 "frey-ranch-malted-grain-series-sb-quad-malt-barrel-1400-brewzle-iv-750ml": {
  "name": "Frey Ranch Quad-Malt Bourbon #1400",
  "short": "Frey Ranch Quad-Malt Bourbon #1400",
  "size": "750ML",
  "tag": "133.4 Proof · 8 Years · Brewzle Fest Exclusive",
  "price": 10800,
  "connected": true,
  "image": "assets/p-frey-ranch-malted-grain-series-sb-quad-m-0.webp",
  "gallery": [
   "assets/p-frey-ranch-malted-grain-series-sb-quad-m-0.webp"
  ],
  "lead": "This private-release barrel pick was hand-selected by Brewzle and Brewzle Club Members.",
  "specs": "133.4 PROOF / 8 YEARS / BREWZLE FEST EXCLUSIVE / 750ML",
  "desc": []
 },
 "dark-arts-hazmat": {
  "name": "Dark Arts Bourbon",
  "short": "Dark Arts Bourbon",
  "size": "750ML",
  "tag": "144 Proof · 11.5 Years · Brewzle Fest Exclusive",
  "price": 17899,
  "connected": true,
  "image": "assets/p-dark-arts-hazmat-0.webp",
  "gallery": [
   "assets/p-dark-arts-hazmat-0.webp"
  ],
  "lead": "This private-release barrel pick was hand-selected by Brewzle.",
  "specs": "144 PROOF / 11.5 YEARS / BREWZLE FEST EXCLUSIVE / 750ML",
  "desc": []
 },
 "n-a-1": {
  "name": "Dark Arts \"Barrel A\"",
  "short": "Dark Arts \"Barrel A\"",
  "size": "750ML",
  "tag": "11.5 Years Old · 113.6 Proof · Brewzle Exclusive",
  "price": 14900,
  "connected": true,
  "image": "assets/p-n-a-1-0.webp",
  "gallery": [
   "assets/p-n-a-1-0.webp",
   "assets/p-n-a-1-1.webp",
   "assets/p-n-a-1-2.webp"
  ],
  "lead": "This private-release barrel pick was hand-selected by the attendees of our Dark Arts 2026 Takeover.",
  "specs": "11.5 YEARS OLD / 113.6 PROOF / BREWZLE EXCLUSIVE / 750ML",
  "desc": [
   "Nose - Vanilla wafer, banana pudding, crème brûlée, with a pleasant rye spice weaving through it all, reminiscent of a really good Old Forester/President’s Choice profile.",
   "Palate - Vanilla custard carries from the first sip through the finish, layered with rye spice, banana pudding, and vanilla wafer. A light crème brûlée note rounds out the finish."
  ]
 },
 "n-a": {
  "name": "Dark Arts \"Barrel B\"",
  "short": "Dark Arts \"Barrel B\"",
  "size": "750ML",
  "tag": "10 Years Old · 114.8 Proof · Brewzle Exclusive",
  "price": 14900,
  "connected": true,
  "image": "assets/p-n-a-0.webp",
  "gallery": [
   "assets/p-n-a-0.webp",
   "assets/p-n-a-1.webp",
   "assets/p-n-a-2.webp"
  ],
  "lead": "This private-release barrel pick was hand-selected by the attendees of our Dark Arts 2026 Takeover.",
  "specs": "10 YEARS OLD / 114.8 PROOF / BREWZLE EXCLUSIVE / 750ML",
  "desc": [
   "Nose - Cola, orange zest, and rye spice come together like a spicy orange cola, backed by heavy caramel.",
   "Palate - Caramel and cola lead upfront, followed by orange zest through the mid-palate. Dark cola develops toward the back, finishing with a light caramel note."
  ]
 },
 "barrell-craft-spirits": {
  "name": "Barrell Craft Spirits Bourbon",
  "short": "Barrell Craft Spirits Bourbon",
  "size": "750ML",
  "tag": "116.7 Proof · Brewzle Fest Exclusive",
  "price": 9899,
  "connected": true,
  "image": "assets/p-barrell-craft-spirits-0.webp",
  "gallery": [
   "assets/p-barrell-craft-spirits-0.webp"
  ],
  "lead": "This private-release barrel pick was hand-selected by TJ and Brewzle Club Members.",
  "specs": "116.7 PROOF / BREWZLE FEST EXCLUSIVE / 750ML",
  "desc": []
 },
 "larrikin-brewzle-fest-pick": {
  "name": "Larrikin Rye Whiskey",
  "short": "Larrikin Rye Whiskey",
  "size": "750ML",
  "tag": "122.22 Proof · 9 Years · Brewzle Fest Exclusive",
  "price": 12000,
  "connected": true,
  "image": "assets/p-larrikin-brewzle-fest-pick-0.webp",
  "gallery": [
   "assets/p-larrikin-brewzle-fest-pick-0.webp"
  ],
  "lead": "This private-release barrel pick was hand-selected by Brewzle.",
  "specs": "122.22 PROOF / 9 YEARS / BREWZLE FEST EXCLUSIVE / 750ML",
  "desc": []
 },
 "makers-mark-private-selection-proof-queen-all-the-mendiant-brewzle-750ml": {
  "name": "Maker’s Mark “Proof Queen: All The Mediant”",
  "short": "Maker’s Mark “Proof Queen: All The Mediant”",
  "size": "750ML",
  "tag": "111 Proof · Brewzle Exclusive",
  "price": 7900,
  "connected": true,
  "image": "assets/p-makers-mark-private-selection-proof-quee-0.webp",
  "gallery": [
   "assets/p-makers-mark-private-selection-proof-quee-0.webp",
   "assets/p-makers-mark-private-selection-proof-quee-1.webp"
  ],
  "lead": "This private-release barrel pick was hand-selected by the Brewzle Team for its unique characteristics and quality.",
  "specs": "111 PROOF / BREWZLE EXCLUSIVE / 750ML",
  "desc": [
   "Nose - Light and sweet, with pronounced oak, earthy undertones, darker apple notes, and baking spice.",
   "Palate - Vanilla and powdered sugar lead into sweet oak and a rich vanilla custard note.",
   "Maker’s Mark, well-known for their classic hand-dipped red wax seal and unique flavor profile, may be off the beaten path compared to some of the other bigger distilleries in Kentucky. The barrel selection at Maker’s Mark is unique in that there is an element of design involved- allowing us to really customize what kind of juice we wanted."
  ]
 },
 "angels-envy-single-barrel-brewzle-750ml": {
  "name": "Angel’s Envy Single Barrel Boubon",
  "short": "Angel’s Envy Single Barrel Boubon",
  "size": "750ML",
  "tag": "110 Proof · Brewzle Exclusive",
  "price": 9400,
  "connected": true,
  "image": "assets/p-angels-envy-single-barrel-brewzle-750ml-0.webp",
  "gallery": [
   "assets/p-angels-envy-single-barrel-brewzle-750ml-0.webp",
   "assets/p-angels-envy-single-barrel-brewzle-750ml-1.webp"
  ],
  "lead": "This private-release barrel pick was hand-selected by the Brewzle Team for its unique characteristics and quality.",
  "specs": "110 PROOF / BREWZLE EXCLUSIVE / 750ML",
  "desc": [
   "Nose - Caramel, dark red fruit, and graham cracker.",
   "Palate - Dark red fruit carries throughout, supported by rich caramel and a lighter touch of graham cracker.",
   "Named playfully after the “angel’s share” of whiskey lost to evaporation from each barrel and founded in 2011 by Bourbon Hall of Fame member Lincoln Henderson and his son, Wes Henderson. Angel’s Envy made a name for itself through the art of secondary finishing of bourbon and rye. Today, Angel’s Envy is best known for producing American Whiskeys that balance traditional craftsmanship with fresh approaches to flavor."
  ]
 }
};
  const ORDER = ["frey-ranch-very-small-batch-brewzle-ii", "frey-ranch-malted-grain-series-sb-quad-malt-barrel-1400-brewzle-iv-750ml", "dark-arts-hazmat", "n-a-1", "n-a", "barrell-craft-spirits", "larrikin-brewzle-fest-pick", "makers-mark-private-selection-proof-queen-all-the-mendiant-brewzle-750ml", "angels-envy-single-barrel-brewzle-750ml"];
  const FIRST = ORDER[0];

  // ILLUSTRATIVE rates and tax.
  const RATES = { shipping: 1499 };
  const TAX_RATE = 0.08;
  const STATE_NAMES = { AL:'Alabama',AK:'Alaska',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',CT:'Connecticut',DE:'Delaware',DC:'District of Columbia',FL:'Florida',GA:'Georgia',HI:'Hawaii',ID:'Idaho',IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming' };
  const ZIP3 = [[5,5,'NY'],[10,27,'MA'],[28,29,'RI'],[30,38,'NH'],[39,49,'ME'],[50,59,'VT'],[60,69,'CT'],[70,89,'NJ'],[100,149,'NY'],[150,196,'PA'],[197,199,'DE'],[200,200,'DC'],[201,201,'VA'],[202,205,'DC'],[206,219,'MD'],[220,246,'VA'],[247,268,'WV'],[270,289,'NC'],[290,299,'SC'],[300,319,'GA'],[320,349,'FL'],[350,369,'AL'],[370,385,'TN'],[386,397,'MS'],[398,399,'GA'],[400,427,'KY'],[430,459,'OH'],[460,479,'IN'],[480,499,'MI'],[500,528,'IA'],[530,549,'WI'],[550,567,'MN'],[569,569,'DC'],[570,577,'SD'],[580,588,'ND'],[590,599,'MT'],[600,629,'IL'],[630,658,'MO'],[660,679,'KS'],[680,693,'NE'],[700,715,'LA'],[716,729,'AR'],[730,749,'OK'],[750,799,'TX'],[800,816,'CO'],[820,831,'WY'],[832,838,'ID'],[840,847,'UT'],[850,865,'AZ'],[870,884,'NM'],[885,885,'TX'],[889,898,'NV'],[900,961,'CA'],[967,968,'HI'],[970,979,'OR'],[980,994,'WA'],[995,999,'AK']];
  function stateForZip(zip) {
    if (!/^\d{5}$/.test(zip)) return null;
    const n = parseInt(zip.slice(0, 3), 10);
    for (const [a, b, s] of ZIP3) if (n >= a && n <= b) return s;
    return null;
  }

  // Shipping rate the AccelPay app returns for a ZIP. No network retailer stocks the
  // brand today, so the route is illustrative: a licensed retailer assigned at launch.
  function ratesFor(zip) {
    const st = stateForZip(zip); if (!st) return null;
    return { st: st, rates: [{ id: 'ship-' + st, kind: 'shipping', title: 'Standard shipping, 2 to 5 business days',
      sub: 'Ships from a licensed retailer in the network · assigned at launch', price: RATES.shipping, by: 'a licensed network retailer' }] };
  }

  // ---------------------------------------------------------------- cart (Shopify AJAX cart stand-in)
  const LS = 'brewzle-shopify-demo-v1';
  const state = load() || { items: [] };
  function load() { try { return JSON.parse(localStorage.getItem(LS)); } catch (e) { return null; } }
  function save() { try { localStorage.setItem(LS, JSON.stringify(state)); } catch (e) {} }
  const money = c => '$' + (c / 100).toFixed(2);
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function subtotal() { return state.items.reduce((a, i) => a + CATALOG[i.h].price * i.qty, 0); }
  function count() { return state.items.reduce((a, i) => a + i.qty, 0); }
  function add(h, qty) {
    const ex = state.items.filter(i => i.h === h)[0];
    if (ex) ex.qty = Math.min(12, ex.qty + qty); else state.items.push({ h: h, qty: qty });
    save(); renderAll(); openDrawer();
  }
  function setQty(h, q) { const it = state.items.filter(i => i.h === h)[0]; if (!it) return; it.qty = Math.max(0, Math.min(12, q)); if (!it.qty) state.items = state.items.filter(i => i.h !== h); save(); renderAll(); }

  function openDrawer() { const d = $('#drawer'); if (!d) return; d.classList.add('on'); $('#scrim').classList.add('on'); document.body.style.overflow = 'hidden'; }
  function closeDrawer() { const d = $('#drawer'); if (!d) return; d.classList.remove('on'); $('#scrim').classList.remove('on'); document.body.style.overflow = ''; }

  function renderHeader() { $$('[data-cart-count]').forEach(el => { el.textContent = count(); el.hidden = !count(); }); }

  function renderDrawer() {
    const box = $('#drawer-items'); if (!box) return;
    box.innerHTML = state.items.length ? state.items.map(i => {
      const p = CATALOG[i.h];
      return '<div class="cline"><div class="im"><img src="' + p.image + '" alt=""></div><div>' +
        '<div class="nm">' + esc(p.name) + '</div><div class="pr">' + money(p.price) + '</div>' +
        '<div class="qrow"><div class="qty"><button data-q="' + (i.qty - 1) + '" data-h="' + i.h + '" aria-label="Decrease quantity">−</button><span>' + i.qty + '</span><button data-q="' + (i.qty + 1) + '" data-h="' + i.h + '" aria-label="Increase quantity">+</button></div>' +
        '<button class="rm" data-q="0" data-h="' + i.h + '" aria-label="Remove">\u{1F5D1}︎</button></div></div>' +
        '<div class="tot">' + money(p.price * i.qty) + '</div></div>';
    }).join('') : '<div class="empty">Your cart is empty</div>';
    const f = $('#drawer-foot');
    if (f) f.innerHTML = '<div class="est"><span>Estimated total</span><span>' + money(subtotal()) + ' USD</span></div>' +
      '<div class="small">Taxes and shipping calculated at checkout. Orders ship from a licensed retailer in your state.</div>' +
      '<a class="btn block" href="checkout.html"' + (state.items.length ? '' : ' style="opacity:.4;pointer-events:none"') + '>Check out</a>' +
      (state.items.length ? '<div class="xpay">' +
        '<button type="button" class="xb shop" data-xpay="Shop Pay" aria-label="Shop Pay"><b>shop</b><span>Pay</span></button>' +
        '<button type="button" class="xb apple" data-xpay="Apple Pay" aria-label="Apple Pay"><svg width="17" height="20" viewBox="0 0 17 20" aria-hidden="true" fill="#fff"><path d="M14.1 10.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9C3.6 4.8 2 5.8 1 7.4c-1.9 3.3-.5 8.2 1.4 10.9.9 1.3 2 2.8 3.4 2.7 1.4-.1 1.9-.9 3.5-.9s2.1.9 3.5.9c1.5 0 2.4-1.3 3.3-2.7 1-1.5 1.5-3 1.5-3.1 0 0-2.9-1.1-3-4.6zM11.5 2.9c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.2 1.2.1 2.3-.6 3-1.5z"/></svg><span>Pay</span></button>' +
        '<button type="button" class="xb google" data-xpay="Google Pay" aria-label="Google Pay"><b class="g">G</b><span>Pay</span></button>' +
      '</div>' : '');
    $$('[data-xpay]', f).forEach(b => b.addEventListener('click', () => { location.href = 'checkout.html?express=' + encodeURIComponent(b.getAttribute('data-xpay')); }));
    $$('[data-q]', box).forEach(b => b.addEventListener('click', () => setQty(b.getAttribute('data-h'), +b.getAttribute('data-q'))));
  }

  // ---------------------------------------------------------------- product page
  const pd = { img: 0, qty: 1 };
  function renderProduct() {
    const host = $('#pdp'); if (!host) return;
    const h0 = host.getAttribute('data-handle'); const h = h0 in CATALOG ? h0 : FIRST; const p = CATALOG[h];
    document.title = p.name + ' | Brewzle';
    host.innerHTML = [
      '<div class="gallery"><div class="main"><img src="', p.gallery[pd.img], '" alt="', esc(p.short), '"></div>',
        p.gallery.length > 1 ? '<div class="thumbs">' + p.gallery.map((g, i) => '<button data-img="' + i + '" aria-selected="' + (i === pd.img) + '"><img src="' + g + '" alt=""></button>').join('') + '</div>' : '',
      '</div>',
      '<div class="info">',
        '<h1>', esc(p.name), '</h1>',
        '<div class="price">', money(p.price), ' USD</div>',
        '<div class="small"><a href="#">Shipping</a> calculated at checkout.</div>', '<div class="small" style="text-transform:uppercase;letter-spacing:.12em;color:var(--gold-hi)">' + esc(p.tag) + '</div>',
        '<div class="qty-wrap">Quantity<div class="qty"><button id="qm" aria-label="Decrease quantity">−</button><span>', pd.qty, '</span><button id="qp" aria-label="Increase quantity">+</button></div></div>',
        p.connected
          ? '<button class="btn atc" id="atc">Add to cart</button>' +
            '<div class="fulfil-line"><img src="assets/logo.webp" alt=""><span>Ships from a licensed retailer in your state. Rates show at checkout once you enter your address.</span></div>'
          : '<button class="btn atc" disabled>Coming soon</button><div class="notice">Not yet stocked by a retailer in the network. It goes live here once it is connected to licensed retailers during onboarding.</div>',
        '<div class="desc"><p><b>', esc(p.lead), '</b><br>', esc(p.specs), '</p>', p.desc.map(d => '<p>' + esc(d) + '</p>').join(''), '</div>',
      '</div>'].join('');
    $$('[data-img]', host).forEach(b => b.addEventListener('click', () => { pd.img = +b.getAttribute('data-img'); renderProduct(); }));
    $('#qm', host).addEventListener('click', () => { if (pd.qty > 1) { pd.qty--; renderProduct(); } });
    $('#qp', host).addEventListener('click', () => { if (pd.qty < 12) { pd.qty++; renderProduct(); } });
    const atc = $('#atc', host); if (atc) atc.addEventListener('click', () => add(h, pd.qty));
  }

  // ---------------------------------------------------------------- checkout
  const co = { rate: null };
  function renderCheckout() {
    const side = $('#os'); if (!side) return;
    const zipEl = $('#zip'), stEl = $('#state');
    const zip = (zipEl.value || '').trim();
    const r = ratesFor(zip);
    if (r && stEl.value !== r.st) stEl.value = r.st;
    const box = $('#rates');
    let rate = null;
    if (!state.items.length) box.innerHTML = '<div class="co-empty">Your cart is empty. <a href="index.html#shop">Continue shopping</a></div>';
    else if (!r) box.innerHTML = '<div class="co-empty">Enter your shipping address to view available shipping methods.</div>';
    else {
      if (!r.rates.filter(x => x.id === co.rate)[0]) co.rate = r.rates[0].id;
      rate = r.rates.filter(x => x.id === co.rate)[0];
      box.innerHTML = '<div class="rates">' + r.rates.map(x => '<label class="rate' + (x.id === co.rate ? ' on' : '') + '"><input type="radio" name="rate" value="' + x.id + '"' + (x.id === co.rate ? ' checked' : '') + '>' +
        (x.icon ? '<img class="ic" src="' + x.icon + '" alt="">' : '') + '<span class="t">' + esc(x.title) + '<span>' + esc(x.sub) + '</span></span><span class="p">' + money(x.price) + '</span></label>').join('') + '</div>' +
        '<div class="callout"><span class="dot"></span><span><b>Retailer routing by AccelPay.</b> Your address decides which licensed retailer sells and ships the order. The order still lands in Brewzle’s Shopify admin with the full customer record.</span></div>';
      $$('input[name=rate]', box).forEach(i => i.addEventListener('change', () => { co.rate = i.value; renderCheckout(); }));
    }
    const sub = subtotal(), ship = rate ? rate.price : null, tax = rate ? Math.round(sub * TAX_RATE) : null;
    side.innerHTML = state.items.map(i => { const p = CATALOG[i.h];
        return '<div class="os-item"><div class="im"><img src="' + p.image + '" alt=""><span class="q">' + i.qty + '</span></div><div class="nm">' + esc(p.name) + '<span>' + p.size + '</span></div><div class="pr">' + money(p.price * i.qty) + '</div></div>'; }).join('') +
      '<div class="os-disc"><input placeholder="Discount code or gift card" aria-label="Discount code"><button type="button">Apply</button></div>' +
      '<div class="os-line"><span class="m">Subtotal · ' + count() + ' item' + (count() === 1 ? '' : 's') + '</span><span>' + money(sub) + '</span></div>' +
      '<div class="os-line"><span class="m">' + (rate && rate.kind === 'delivery' ? 'Delivery' : 'Shipping') + '</span><span>' + (ship === null ? '<span class="m">Enter shipping address</span>' : money(ship)) + '</span></div>' +
      '<div class="os-line"><span class="m">Estimated taxes</span><span>' + (tax === null ? '<span class="m">-</span>' : money(tax)) + '</span></div>' +
      '<div class="os-line total"><span>Total</span><span><small>USD</small>' + money(sub + (ship || 0) + (tax || 0)) + '</span></div>' +
      '<div class="callout"><span class="dot"></span><span><b>Taxes by AccelPay.</b> Sales tax calculated for the ship-to address.</span></div>' +
      (rate ? '<div class="callout"><span class="dot"></span><span>' + (rate.kind === 'delivery' ? 'Delivered by ' : 'Sold and shipped by ') + '<b>' + esc(rate.by) + '</b>, a licensed retailer. Adult signature (21+) required.</span></div>' : '');
    const pay = $('#pay');
    if (pay) { pay.disabled = !rate; pay.textContent = 'Pay now'; }
    co.current = rate; co.total = sub + (ship || 0) + (tax || 0);
  }
  function wireCheckout() {
    const form = $('#co-form'); if (!form) return;
    ['#zip', '#state'].forEach(s => $(s).addEventListener('input', () => { co.rate = null; renderCheckout(); }));
    $('#zip').addEventListener('change', renderCheckout);
    $$('[data-fill]').forEach(b => b.addEventListener('click', () => {
      const v = b.getAttribute('data-fill').split('|');
      form.address1.value = v[0]; form.city.value = v[1]; $('#zip').value = v[2]; co.rate = null; renderCheckout();
    }));
    const xp = $('#xpay-top');
    if (xp) { xp.innerHTML = '<div class="xpay big">' +
        '<button type="button" class="xb shop" data-xpay="Shop Pay" aria-label="Shop Pay"><b>shop</b><span>Pay</span></button>' +
        '<button type="button" class="xb apple" data-xpay="Apple Pay" aria-label="Apple Pay"><svg width="17" height="20" viewBox="0 0 17 20" aria-hidden="true" fill="#fff"><path d="M14.1 10.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9C3.6 4.8 2 5.8 1 7.4c-1.9 3.3-.5 8.2 1.4 10.9.9 1.3 2 2.8 3.4 2.7 1.4-.1 1.9-.9 3.5-.9s2.1.9 3.5.9c1.5 0 2.4-1.3 3.3-2.7 1-1.5 1.5-3 1.5-3.1 0 0-2.9-1.1-3-4.6zM11.5 2.9c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.2 1.2.1 2.3-.6 3-1.5z"/></svg><span>Pay</span></button>' +
        '<button type="button" class="xb google" data-xpay="Google Pay" aria-label="Google Pay"><b class="g">G</b><span>Pay</span></button>' +
      '</div>';
      $$('[data-xpay]', xp).forEach(b => b.addEventListener('click', () => expressFill(b.getAttribute('data-xpay')))); }
    const q = new URLSearchParams(location.search).get('express'); if (q) expressFill(q);
    function expressFill(method) {
      // Demo: the wallet hands back a saved contact and address, then checkout continues.
      form.email.value = form.email.value || 'shopper@example.com';
      form.first.value = form.first.value || 'Jordan'; form.last.value = form.last.value || 'Lee';
      form.address1.value = '350 E 13th St'; form.city.value = 'New York'; $('#zip').value = '10009'; co.rate = null; renderCheckout();
      const n = $('#xpay-note'); if (n) { n.hidden = false; n.textContent = method + ' filled your contact and address. Pick a shipping method below, then pay.'; }
      const r = $('#rates'); if (r && r.scrollIntoView) r.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    form.addEventListener('submit', e => {
      e.preventDefault(); if (!co.current) return;
      const n = 'AP-DEMO-' + (1000 + Math.floor(Math.random() * 9000));
      try { sessionStorage.setItem('ap-order', JSON.stringify({ n: n, total: co.total, by: co.current.by, kind: co.current.kind })); } catch (err) {}
      state.items = []; save();
      location.href = 'checkout.html?confirmed=1';
    });
  }

  function renderAll() { renderHeader(); renderDrawer(); renderProduct(); renderCheckout(); }
  function boot() {
    $$('[data-cart-toggle]').forEach(b => b.addEventListener('click', openDrawer));
    const x = $('#drawer-close'); if (x) x.addEventListener('click', closeDrawer);
    const s = $('#scrim'); if (s) s.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
    const burger = $('#burger'); if (burger) burger.addEventListener('click', () => $('nav.main').classList.toggle('open'));
    wireCheckout(); renderAll();
  }
  window.APDemo = { catalog: CATALOG, order: ORDER, money: money, add: add };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
