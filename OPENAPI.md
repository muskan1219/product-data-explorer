# API (Sketch)

## GET /api/navigation
Returns navigation headings.

## GET /api/categories?navigation_slug=...
Category listing for a navigation heading.

## GET /api/products?category_slug=...&limit=20&page=1
Product grid.

## GET /api/products/:id
Product detail with description, reviews, recommendations.

## POST /api/scrape
Trigger an on-demand scrape (idempotent). Body: { url: string, type: 'product'|'category' }
