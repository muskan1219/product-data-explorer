-- PostgreSQL sample schema (simplified)
CREATE TABLE IF NOT EXISTS navigation (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  last_scraped_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS category (
  id SERIAL PRIMARY KEY,
  navigation_id INT REFERENCES navigation(id),
  parent_id INT,
  title TEXT,
  slug TEXT,
  product_count INT,
  last_scraped_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS product (
  id SERIAL PRIMARY KEY,
  source_id TEXT UNIQUE,
  title TEXT,
  price NUMERIC,
  currency TEXT,
  image_url TEXT,
  source_url TEXT UNIQUE,
  last_scraped_at TIMESTAMP
);
